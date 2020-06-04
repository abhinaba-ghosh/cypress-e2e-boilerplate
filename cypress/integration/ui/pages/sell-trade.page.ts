class SellTradePage {
  public launchSellTradeCarURL() {
    cy.visit('/sell-my-car');
  }

  public selectYear(year: string) {
    cy.react('select', { name: 'Year' }).select(year);
  }

  public selectMake(make: string) {
    cy.react('select', { name: 'Make' }).select(make);
  }

  public selectModel(model: string) {
    cy.react('select', { name: 'Model' }).select(model);
  }

  public clickEstimateButton() {
    cy.get('button')
      .contains('Get my estimate')
      .click();
  }

  public checkDetailsPageShown(text: string) {
    cy.get('div')
      .contains(text)
      .should('be.exist');
  }
}

export const sellTradePage: SellTradePage = new SellTradePage();
