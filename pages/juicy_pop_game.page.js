import { canvasObjects } from '../objects/canvas.objects.js';
import { expect } from '@playwright/test';

export class PopUpPage {
  constructor(page) {
    this.page = page;
  }

  async startJuicyPopGame(gameUrl, timeoutSec) {
    await this.page.goto(gameUrl);
    await this.page.setViewportSize({ width: 1200, height: 800 });
    await this.page.click(canvasObjects.gameButton);
    await this.page.waitForTimeout(15000); // Wait for game to load
    const acceptAllVisible = await this.page.locator(canvasObjects.acceptAllButton).isVisible();
    if (acceptAllVisible) {
      await this.page.click(canvasObjects.acceptAllButton);
    }
    const iframeElement = await this.page.$('#js-modal-iframe');
    this.frame = await iframeElement.contentFrame(); // Save the frame if needed elsewhere
    this.canvas = await this.frame.$('#__canvas_wrapper__ canvas');
    const box = await this.canvas.boundingBox();

    await this.page.mouse.click(box.x + 600, box.y + 300);
    await this.page.waitForTimeout(1000);

    return { box, frame: this.frame };
  }

  async compareScreenshots(screenshotName) {
    const nameoFCanvas = await this.canvas.screenshot();
    expect(nameoFCanvas).toMatchSnapshot(screenshotName, { threshold: 0.3 });
  }

}
