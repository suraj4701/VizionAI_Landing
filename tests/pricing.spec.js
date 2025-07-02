import { expect, test } from '@playwright/test';
const home_url = process.env.HOME_URL;

test("Pricing Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-903']").click()
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

test("Pricing Buy service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-903']").click()
    const envantofrezkaLinkLocator = page.locator(".elementor-button.elementor-button-link.elementor-size-sm[href='https://service.iqonic.design/services/vizionai-flutter-app-with-laravel-backend/']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/vizionai-flutter-app-with-laravel-backend/");
})