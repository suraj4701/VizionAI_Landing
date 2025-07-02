const { expect } = require('@playwright/test');

const UserappPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.vizionai");
    const iqonicDesignSpanLocator = newPage.locator("//body[1]/c-wiz[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/c-wiz[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Vizion AI: Your Creative Hub');
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/vizion-ai/login");
    return newPage;
}

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='__next']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/h1[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('IQONIC DESIGN');
    return newPage;
}

const EnvantoVizionAIVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Vizion AI - AI Creator App with Flutter with ChatGPT-4o');
    return newPage;
}

module.exports = { UserappPlaystore, AdminPanelVerify, TrustpilotVerify, EnvantoVizionAIVerify };