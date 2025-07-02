import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EnvantoVizionAIVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("WhyDifferent Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-868']").click()
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-ed88fc6 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("WhyDifferent Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-868']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/login']");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("WhyDifferent Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-868']").click()
    const trustpilotLinkLocator = page.locator("a[href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("WhyDifferent tailored features", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-868']").click()
    const envantofrezkaLinkLocator = page.locator("//a[normalize-space()='tailored features']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://vizionai.iqonic.design/features/");
})

test("WhyDifferent custom development services", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-868']").click()
    const envantofrezkaLinkLocator = page.locator("//a[normalize-space()='custom development services']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
})