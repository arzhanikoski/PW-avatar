import { expect, test } from '@playwright/test';

import { PopUpPage } from '../pages/juicy_pop_game.page.js';
import { canvasObjects } from '../objects/canvas.objects';
import { selectedLanguageData } from '../data/test_data.js';

const gameUrl = process.env.GAME_URL || 'https://avatarux.com/games/juicypop/'; // Default URL if not set
const timeoutSec = 30000; // Default to 30 seconds if not set


test('Juicy Pop Game', async ({ page }) => {
    const popUpPage = new PopUpPage(page);
    const { box, frame } = await popUpPage.startJuicyPopGame(gameUrl, timeoutSec);
    await page.mouse.click(box.x + canvasObjects.optionButton.x, box.y + canvasObjects.optionButton.y);
    await expect(frame.locator(canvasObjects.gameInfoButton)).toContainText('GAME INFO');
    await frame.click(canvasObjects.gameInfoButton);
    await popUpPage.compareScreenshots('gameInfo.png');
    await frame.locator(canvasObjects.lastElementGI).scrollIntoViewIfNeeded();
    await popUpPage.compareScreenshots('gameInfoLast.png');
    await frame.locator(canvasObjects.closeButton).click();
    await page.waitForTimeout(1000);

    await page.mouse.click(box.x + canvasObjects.optionButton.x, box.y + canvasObjects.optionButton.y);
    await expect(frame.locator(canvasObjects.gameRulesButton)).toContainText('GAME RULES');
    await frame.click(canvasObjects.gameRulesButton);
    await popUpPage.compareScreenshots('gameRules.png');
    await expect(frame.locator(canvasObjects.gameRulesSection)).toContainText(selectedLanguageData.gameRules.bullet2);
    await frame.locator(canvasObjects.lastElementGR).scrollIntoViewIfNeeded();
    await popUpPage.compareScreenshots('gameRulesLast.png');
    await frame.locator(canvasObjects.closeButton).click();

});