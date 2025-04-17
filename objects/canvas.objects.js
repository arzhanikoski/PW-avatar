
export class CanvasObjects {

  // locators
  
  get pressAnywhereButton() { return { x: 600, y: 340 } }
  get optionButton() { return { x: 124, y: 430 } }
  get tryDemoButton() { return ('.hero-section .crunch-button__decor') }
  get acceptAllButton() { return ('[data-cky-tag="accept-button"][aria-label="Accept All"]') }
  get iframe() { return ("[title='Iframe Content']") }
  get canvas() { return ('canvas') }
  get canvasWrapper() { return ('#__canvas_wrapper__') } 
  get gameInfoButton() { return ("//*[contains(text(),'GAME INFO')]") }
  get gameRulesButton() { return ("//*[contains(text(),'GAME RULES')]") }
  get closeButton() { return (".pageActive-0-2-43 .closeIcon-0-2-56") }
  get closeModalButton() { return ('.js-modal-close') }
  get modalContent() { return ('.modal-content') }
  get gameButton() { return ('.hero-section button[data-iframe-type="game"]') }
  get gameTitleText() { return ('.game-title-text') }
  get starredCell() { return ('.wrapper-0-2-88 .section-0-2-90:nth-child(5)') }
  get gambleWheel() { return ('.wrapper-0-2-88 .section-0-2-90:nth-child(6)') }
  get symbolsPayout() { return ('.wrapper-0-2-88 .section-0-2-90:nth-child(7)') }
  get gameRulesTitle() { return ('.pageActive-0-2-43 .rulesContent-d4-0-2-52 h2') }
  get lastElementGI() { return ('.wrapper-0-2-88 .section-0-2-90:last-child span') }
  get lastElementGR() { return ('.rulesContent-0-2-45.rulesContent-d4-0-2-52 > div > ul:nth-child(9) > li:nth-child(3)') }  
  get juicyLogoGI() { return ('[src^="resources/paytabe"]') }
  get gameRulesSection() { return ('div.rulesContent-0-2-45.rulesContent-d4-0-2-52 > div > ul:nth-child(5) > li:nth-child(2)') }
  
}
export const canvasObjects = new CanvasObjects()