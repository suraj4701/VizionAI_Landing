import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EnvantoVizionAIVerify } from './common';
const home_url = process.env.HOME_URL;

test("More Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//li[@id='menu-item-928']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
})

test("More Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//li[@id='menu-item-2749']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/vizion-ai-demo-call");
})

test("More Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("div[data-items='primary'] a[aria-label='Buy Now']");
    await EnvantoVizionAIVerify(page, facebookLinkLocator);
})

test("More View Demo", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("div[data-items='primary'] a[aria-label='View Demo']");
    await AdminPanelVerify(page, facebookLinkLocator);
})