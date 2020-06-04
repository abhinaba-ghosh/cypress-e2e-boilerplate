import { sellTradePage } from '../pages';

describe('Sell or Trade Cars Page Test', () => {
  before(() => {
    sellTradePage.launchSellTradeCarURL();
    cy.waitForReact(5000, '#page-node');
  });

  it('user verifies sell cars details', () => {
    sellTradePage.selectYear('2018');
    sellTradePage.selectMake('FIAT');
    sellTradePage.selectModel('500');
    sellTradePage.clickEstimateButton();
    sellTradePage.checkDetailsPageShown('FIAT');
  });
});
