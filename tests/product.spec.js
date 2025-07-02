import { test } from '@playwright/test';
import { AdminPanelVerify, EnvantoVizionAIVerify, TrustpilotVerify, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Product AdminPanel Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-c53f06b elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Product AdminPanel View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/login']");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Product AdminPanel Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const trustpilotLinkLocator = page.locator("a[href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Product AdminPanel View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/app']");
    await adminpanelLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Product AdminPanel View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/app/service/systemservice']");
    await adminpanelLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Product AdminPanel View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/app/custom-templates']");
    await adminpanelLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Product AdminPanel View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/app/categories']");
    await adminpanelLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Product AdminPanel View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-909']").click()
    const adminpanelLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://apps.iqonic.design/vizion-ai/app/subscription/plans']");
    await adminpanelLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Product Mobile App Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const envantofrezkaLinkLocator = page.locator("div[class='elementor-element elementor-element-b4eeb73 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await EnvantoVizionAIVerify(page, envantofrezkaLinkLocator);
})

test("Product Mobile App View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-bf756ce elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Product Mobile App Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const trustpilotLinkLocator = page.locator("a[href='https://www.trustpilot.com/review/iqonic.design']");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Product Mobile App View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-33141cc elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Product Mobile App View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-98bdacf elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Product Mobile App View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-f63822d elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Product Mobile App View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-5d8f327 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Product Mobile App View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-907']").hover()
    await page.locator("//li[@id='menu-item-908']").click()
    const userappplaystoreLinkLocator = page.locator("div[class='elementor-element elementor-element-7b2cf27 elementor-widget elementor-widget-button'] a[class='elementor-button elementor-button-link elementor-size-sm']");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})