import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EnvantoVizionAIVerify, TrustpilotVerify, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Home User App playstore link verify", async ({ page }) => {
    await page.goto(home_url);
    const userappplaystoreLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://play.google.com/store/apps/details?id=com.iqonic.vizionai']");
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Home Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/login']");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Home Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Home Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-6688b2e elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-824cc92 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-f234997 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 4", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-043c575 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 5", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://1.envato.market/MXNo22?u=https%3A%2F%2Fthemeforest.net%2Fcheckout%2Ffrom_item%2F51007759%3Flicense%3Dregular']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//header/div[1]/h3[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Create Account');
})

test("Home Buy service", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://service.iqonic.design/services/vizionai-flutter-app-with-laravel-backend/']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/vizionai-flutter-app-with-laravel-backend/");
})

test("Home Buy VizionAI Now", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-2e836b9 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Home Facebook link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator(".elementor-icon.elementor-social-icon.elementor-social-icon-facebook-square.elementor-repeater-item-e9a26e9");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("Home YouTube link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator(".elementor-icon.elementor-social-icon.elementor-social-icon-youtube.elementor-repeater-item-c937637");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("Home X Twitter link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator(".elementor-icon.elementor-social-icon.elementor-social-icon-x-twitter.elementor-repeater-item-99fa7cc");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Home Instagram link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator(".elementor-icon.elementor-social-icon.elementor-social-icon-instagram.elementor-repeater-item-0ceeed8");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("a[href='https://vizionai.iqonic.design/products/admin-panel/']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/products/admin-panel-for-ai-creator-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/products/admin-panel-for-ai-creator-app/");
});

test("Home Footer Mobile App", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("a[href='https://vizionai.iqonic.design/products/app/']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/products/best-ai-art-generator-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/products/best-ai-art-generator-app/");
});

test("Home Footer AI Images", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/features/#ai-images")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/features/#ai-images");
});

test("Home Footer AI Writer", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/features/#ai-writing")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/features/#ai-writing");
});

test("Home Footer AI Chat", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[3]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/features/#ai-chat")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/features/#ai-chat");
});

test("Home Footer AI Speech To Text", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[4]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/features/#ai-voiceover")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/features/#ai-voiceover");
});

test("Home Footer AI Voice Over", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[5]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/features/#ai-voiceover")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/features/#ai-voiceover");
});

test("Home Footer Docs", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/vizion-ai-doc/build/");
})

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/ul[1]/li[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/ul[1]/li[2]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://vizionai.iqonic.design/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/pricing/");
});

test("Home Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/ul[1]/li[3]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/cost-calculator/");
})

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/ul[1]/li[4]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://iqonic.design/licensing-terms-more/");
})

test("Home Footer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/ul[1]/li[5]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
})

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("a[href='https://iqonic.design/']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://iqonic.design/");
})