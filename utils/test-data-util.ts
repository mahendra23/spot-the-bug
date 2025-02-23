import { RegistrationFormData } from "../pages/register.page";

export let testUserData: RegistrationFormData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'test.user.com',
    phoneNumber: '1234567890',
    password: 'pass123',
    //The checkbox field is disabled, so the value is set to false to prevent the test from failing when attempting to click it.
    termsCheckBox: false,
}