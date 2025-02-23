import { Page } from '@playwright/test';

export class PageUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({ path: `./screenshots/${fileName}-${Date.now()}.png` });
  }
}