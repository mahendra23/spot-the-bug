import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register.page';
import { testUserData } from "../../utils/test-data-util";

test.describe('User Registration Submit Tests', () => {
    let registerPage: RegisterPage;
    
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.checkHeaderDisplayed();
    });

    //This test will fail because the results data does not match the input data.
    test('Submit user data', async () => {
        await registerPage.submitRegistrationForm(testUserData);
        const errorMessage = await registerPage.getAlertMessageDisplayed();
        expect(errorMessage).toContain('Successfully registered the following information');
        expect(await registerPage.matchResultData(testUserData)).toBeTruthy();
    });
});