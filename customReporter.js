const nodemailer = require('nodemailer');

class CustomReporter {
    constructor() {
        this.totalTests = 0;
        this.testFinalStatuses = new Map();
        this.testDetailsMap = new Map();
        this.failedTestDetails = [];
    }

    onBegin(config, suite) {
        this.totalTests = suite.allTests().length;
        console.log(`Starting the run with ${this.totalTests} tests`);
    }

    onTestEnd(test, result) {
        this.testFinalStatuses.set(test.id, result.status);
        let errorMessage = 'No specific error message found.';
        let testSpecificErrorLabel = '';

        if (result.errors && result.errors.length > 0) {
            errorMessage = result.errors.map(error => this.stripAnsiCodes(error.message)).join('\n');

            for (const error of result.errors) {
                const currentErrorMessageLower = this.stripAnsiCodes(error.message).toLowerCase();

                if (currentErrorMessageLower.includes('expect(') || currentErrorMessageLower.includes('expect.')) {
                    if (currentErrorMessageLower.includes('expect(received).tobe(expected)')) testSpecificErrorLabel = 'ASSERTION FAILED (Expected Result is not Match.)';
                    else if (currentErrorMessageLower.includes('expect(received).tohaveurl')) testSpecificErrorLabel = 'URL MISMATCH';
                    else if (currentErrorMessageLower.includes('expect(received).tobevisible')) testSpecificErrorLabel = 'ELEMENT NOT VISIBLE';
                    else testSpecificErrorLabel = 'ASSERTION FAILED (GENERIC)';
                    break;
                } else if (currentErrorMessageLower.includes('locator not found') || currentErrorMessageLower.includes('waiting for selector') || currentErrorMessageLower.includes('waiting for locator')) {
                    testSpecificErrorLabel = 'LOCATOR NOT FOUND';
                    break;
                } else if (currentErrorMessageLower.includes('locator.scrollintoviewifneeded') || currentErrorMessageLower.includes('waiting for locator') || currentErrorMessageLower.includes('waiting for selector')) testSpecificErrorLabel = 'TIMEOUT ERROR (LOCATOR ACTION)';
                else if (currentErrorMessageLower.includes('timeout') && !testSpecificErrorLabel.includes('LOCATOR ACTION')) testSpecificErrorLabel = 'TIMEOUT ERROR';
                else if ((currentErrorMessageLower.includes('syntaxerror') || currentErrorMessageLower.includes('not a valid xpath expression')) && !testSpecificErrorLabel) testSpecificErrorLabel = 'INVALID LOCATOR SYNTAX';
            }

            if (!testSpecificErrorLabel && result.errors.length > 0) testSpecificErrorLabel = 'GENERIC PLAYWRIGHT ERROR';
        }

        this.testDetailsMap.set(test.id, {
            name: test.title,
            location: `${test.location.file}:${test.location.line}`,
            latestError: errorMessage,
            errorLabel: testSpecificErrorLabel,
        });

        if (result.status === 'failed' || result.status === 'timedOut') {
            console.log('\n========================================');
            console.log(`❌ FAILED TEST ATTEMPT: ${test.title}`);
            console.log(`File: ${test.location.file}:${test.location.line}`);
            if (result.errors && result.errors.length > 0) {
                console.log('Error Details:');
                result.errors.forEach((error, index) => {
                    let individualErrorLabel = '';
                    const currentErrorMessageLower = this.stripAnsiCodes(error.message).toLowerCase();

                    if (currentErrorMessageLower.includes('expect(') || currentErrorMessageLower.includes('expect.')) {
                        if (currentErrorMessageLower.includes('expect(received).tobe(expected)')) individualErrorLabel = 'ASSERTION FAILED (Expected Result is not Match.)';
                        else if (currentErrorMessageLower.includes('expect(received).tohaveurl')) individualErrorLabel = 'URL MISMATCH';
                        else if (currentErrorMessageLower.includes('expect(received).tobevisible')) individualErrorLabel = 'ELEMENT NOT VISIBLE';
                        else individualErrorLabel = 'ASSERTION FAILED (GENERIC)';
                    } else if (currentErrorMessageLower.includes('locator not found') || currentErrorMessageLower.includes('waiting for selector') || currentErrorMessageLower.includes('waiting for locator')) individualErrorLabel = 'LOCATOR NOT FOUND';
                    else if (currentErrorMessageLower.includes('locator.scrollintoviewifneeded') || currentErrorMessageLower.includes('waiting for locator') || currentErrorMessageLower.includes('waiting for selector')) individualErrorLabel = 'TIMEOUT ERROR (LOCATOR ACTION)';
                    else if (currentErrorMessageLower.includes('timeout')) individualErrorLabel = 'TIMEOUT ERROR';
                    else if (currentErrorMessageLower.includes('syntaxerror') || currentErrorMessageLower.includes('not a valid xpath expression')) individualErrorLabel = 'INVALID LOCATOR SYNTAX';
                    else individualErrorLabel = 'GENERIC PLAYWRIGHT ERROR';

                    const labelPrefix = individualErrorLabel ? `${individualErrorLabel}: ` : '';
                    console.log(`    ${index + 1}. Error Label: ${labelPrefix}`);
                    console.log(`    ${index + 1}. Message: ${this.stripAnsiCodes(error.message)}`);
                });
            } else console.log(errorMessage);
            console.log('========================================\n');
        }
    }

    stripAnsiCodes(str) {
        return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=\x3c-\x3e]/g, '');
    }

    async onEnd(result) {
        let finalPassCount = 0;
        let finalFailCount = 0;
        const uniqueFailedTests = new Map();

        this.testFinalStatuses.forEach((status, testId) => {
            if (status === 'passed') {
                finalPassCount++;
            } else if (status === 'failed' || status === 'timedOut') {
                finalFailCount++;
                if (!uniqueFailedTests.has(testId)) {
                    const testDetails = this.testDetailsMap.get(testId);
                    if (testDetails) {
                        uniqueFailedTests.set(testId, {
                            name: testDetails.name,
                            location: testDetails.location,
                            errorMessage: testDetails.latestError,
                            errorLabel: testDetails.errorLabel,
                        });
                    }
                }
            }
        });

        this.failedTestDetails = Array.from(uniqueFailedTests.values());

        console.log(`\n--- Test Summary ---`);
        console.log(`Project: VizionAI Landing Page`);
        console.log(`Total Tests Run: ${this.totalTests}`);
        console.log(`Tests Passed: ${finalPassCount}`);
        console.log(`Tests Failed: ${finalFailCount}`);

        if (this.failedTestDetails.length > 0) {
            console.log(`\n--- Failed Test Case Breakdown (${this.failedTestDetails.length} tests) ---`);
            this.failedTestDetails.forEach((failedTest, index) => {
                console.log(`\n${index + 1}. Test Name: ${failedTest.name}`);
                console.log(`    Location: ${failedTest.location}`);
                const labelPrefix = failedTest.errorLabel ? `${failedTest.errorLabel}: ` : '';
                console.log(`    Error label: ${labelPrefix}`);
                console.log(`    Error Message:${failedTest.errorMessage}`);
            });
        } else console.log(`\nNo test cases failed.`);

        console.log(`\nFinished the run with overall status: ${result.status}`);
        console.log(`--------------------\n`);

        await this.sendReportEmail(result.status, finalPassCount, finalFailCount);
    }

    async sendReportEmail(overallStatus, passedCount, failedCount) {
        const senderEmail = process.env.EMAIL_USER;
        const senderPassword = process.env.EMAIL_PASS;
        const recipientEmails = process.env.RECIPIENT_EMAILS;

        if (!senderEmail || !senderPassword || !recipientEmails || !process.env.SMTP_HOST || !process.env.SMTP_PORT) {
            console.warn("Skipping email send: One or more email environment variables (EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAILS, SMTP_HOST, SMTP_PORT) are not set. Please set them in your environment.");
            return;
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: senderEmail,
                pass: senderPassword,
            },
        });

        let emailHtmlBody = `
            <p>Dear Team,</p>
            <p>Here is the automated Playwright test report summary for <strong>VizionAI Landing Page</strong> as of ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}.</p>
            <hr>
            <h2>Test Summary</h2>
            <table style="width:100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Total Tests Run</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: blue;">${this.totalTests}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Tests Passed</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: green;">${passedCount}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Tests Failed</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: red;">${failedCount}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Overall Status</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: ${overallStatus === 'passed' ? 'green' : 'red'};">${overallStatus.toUpperCase()}</td>
                </tr>
            </table>
            <hr>
        `;

        if (this.failedTestDetails.length > 0) {
            emailHtmlBody += `
                <h2>Failed Test Case Breakdown</h2>
                <p>The following tests failed:</p>
                <ul style="list-style-type: none; padding: 0;">
            `;
            this.failedTestDetails.forEach((failedTest, index) => {
                const errorLabelHtml = failedTest.errorLabel ? `
                    <span style="float: right; background-color: #ffe0e0; color: #cc0000; padding: 3px 8px; border-radius: 8px;font-size: 0.9em; font-weight: bold; border: 1px solid #ffb3b3;">${failedTest.errorLabel}</span>` : '';

                emailHtmlBody += `
                    <li style="margin-bottom: 15px; border: 1px solid #eee; padding: 10px; border-radius: 5px; background-color: #fff; overflow: hidden;">
                        <div style="font-weight: bold; display: flex; justify-content: space-between; align-items: center;">
                            <div style="margin-right: 20px;" >${index + 1}. Test Name: ${failedTest.name}</div>
                           <div> ${errorLabelHtml}</div>
                        </div>
                        <span style="display: block; margin-left: 20px; margin-top: 5px;">
                            <strong>Location:</strong> 
                            ${failedTest.location}
                        </span><br>
                        <span style="display: block; margin-left: 20px;">
                            <strong>Error Message:</strong>
                        </span> 
                        <pre style="white-space: pre-wrap; word-wrap: break-word; background-color: #f8f8f8; padding: 5px; border: 1px solid #ddd; margin-left: 20px;">${failedTest.errorMessage}</pre>
                    </li>
                `;
            });
            emailHtmlBody += `</ul><hr>`;
        } else emailHtmlBody += `<p>All test cases passed! 🎉</p><hr>`;

        emailHtmlBody += `
            <p>Best regards,</p>
            <p>Your Automation Team</p>
        `;

        const mailOptions = {
            from: `"Playwright Report" <${senderEmail}>`,
            to: recipientEmails,
            subject: `Playwright Test Report - ${overallStatus.toUpperCase()} - ${new Date().toLocaleDateString('en-IN')}`,
            html: emailHtmlBody,
        };

        try {
            console.log(`Attempting to send email to: ${recipientEmails}`);
            let info = await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Error sending email:', error);
            if (error.responseCode === 535) console.error('Authentication failed. Check your email user/password or app password.');
            else if (error.code === 'EENVELOPE') console.error('Email address validation failed. Check recipient email format.');
        }
    }
}

module.exports = CustomReporter;