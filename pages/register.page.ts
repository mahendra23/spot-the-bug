import { Page, expect } from '@playwright/test';

export interface RegistrationFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  termsCheckBox: boolean;
};

export class RegisterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/bugs-form');
  }

  async checkHeaderDisplayed() {
    await this.page.locator('h2', {hasText: "CHALLENGE - Spot the BUGS!"}).isVisible(); 
  }

  async fillFirstName(firstName: string) {
    const firstNameLabel = this.page.locator('label[for="firstName"]');
    await expect.soft(firstNameLabel).toContainText("First Name");
    await this.page.locator('#firstName').fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page.locator('#lastName').fill(lastName);
  }

  async fillPhoneNumber(phoneNumber: string) {
    await this.page.locator('#phone').fill(phoneNumber);
  }

  async fillEmail(email: string) {
    await this.page.locator('#emailAddress').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  async checkTermsCheckBox() {
    await this.page.getByRole('checkbox').check();
  }

  async clickRegisterButton() {
    await this.page.locator('#registerBtn').click();
  }

  async getAlertMessageDisplayed(): Promise<string> {
    return await this.page.locator('#message').textContent() || '';
  }

  async submitRegistrationForm(registrationFormData: RegistrationFormData) {
    if (registrationFormData.firstName) {
      await this.fillFirstName(registrationFormData.firstName);
    }

    if (registrationFormData.lastName) {
      await this.fillLastName(registrationFormData.lastName);
    }

    if (registrationFormData.email) {
      await this.fillEmail(registrationFormData.email);
    }

    if (registrationFormData.phoneNumber) {
      await this.fillPhoneNumber(registrationFormData.phoneNumber);
    }

    if (registrationFormData.password) {
      await this.fillPassword(registrationFormData.password);
    }

    if (registrationFormData.termsCheckBox) {
      await this.checkTermsCheckBox();
    }

    await this.clickRegisterButton();
  }

  async getResultFirstName(): Promise<string> {
    return await this.page.locator('#resultFn').textContent() || '';
  }

  async getResultLastName(): Promise<string> {
    return await this.page.locator('#resultLn').textContent() || '';
  }

  async getResultEmail(): Promise<string> {
    return await this.page.locator('#resultEmail').textContent() || '';
  }

  async getResultPhoneNumber(): Promise<string> {
    return await this.page.locator('#resultPhone').textContent() || '';
  }

  async getResultCountry(): Promise<string> {
    return await this.page.locator('#country').textContent() || '';
  }

  async matchResultData(registrationFormData: RegistrationFormData): Promise<boolean> {
    const resultFirstName = await this.getResultFirstName();
    const resultLastName = await this.getResultLastName();
    const resultEmail = await this.getResultEmail();
    const resultPhoneNumber = await this.getResultPhoneNumber();
    const resultCountry = await this.getResultCountry();
    let result = true;
    result = resultFirstName === `First Name: ${registrationFormData.firstName}`;
    result = resultLastName === `Last Name: ${registrationFormData.lastName}`;
    result = resultEmail === `Email: ${registrationFormData.email}`;
    result = resultPhoneNumber === `Phone: ${registrationFormData.phoneNumber}`;
    result = resultCountry === 'Country: ';
    return result;
  }
}