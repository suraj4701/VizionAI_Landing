import { test } from '@playwright/test';
import { EnvantoVizionAIVerify, TrustpilotVerify, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Feature Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-9db4bd5 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Feature View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-114664a elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-868']").click()
    const trustpilotLinkLocator = page.locator("a[href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Feature View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-27bdd59 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-fff210b elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-db973ef elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-c804534 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-7bea3a2 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-1a912d7 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-81f7c81 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Feature View Demo 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-904']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-da42b86 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})