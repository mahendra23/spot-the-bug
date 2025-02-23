import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register.page';
import { testUserData } from "../../utils/test-data-util";

test.describe('User Registration Error Tests', () => {
    let registerPage: RegisterPage;
    
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.checkHeaderDisplayed();
    });

    test('Password Field error', async () => {
        let testData = {...testUserData}
        testData.password = undefined;
        await registerPage.submitRegistrationForm(testData);
        const errorMessage = await registerPage.getAlertMessageDisplayed();
        expect(errorMessage).toContain('The password should contain between [6,20] characters!');
    });

    test('Phone Number Field error', async () => {
        let testData = {...testUserData}
        testData.phoneNumber = undefined;
        await registerPage.submitRegistrationForm(testData);
        const errorMessage = await registerPage.getAlertMessageDisplayed();
        expect(errorMessage).toContain('The phone number should contain at least 10 characters!');
    });

    //This test will fail because the last name field is mandatory but it lacks proper validation.
    test('Last name Field error', async () => {
        let testData = {...testUserData}
        testData.lastName = undefined;
        await registerPage.submitRegistrationForm(testData);
        const errorMessage = await registerPage.getAlertMessageDisplayed();
        expect(errorMessage).toContain('The Last Name field is mandatory!');
    });

    //This test will fail because the email addres field is mandatory but it lacks proper validation.
    test('Email Address Field error', async () => {
        let testData = {...testUserData}
        testData.email = undefined;
        await registerPage.submitRegistrationForm(testData);
        const errorMessage = await registerPage.getAlertMessageDisplayed();
        expect(errorMessage).toContain('The Email address field is mandatory!');
    });
});