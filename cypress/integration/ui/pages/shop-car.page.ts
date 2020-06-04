class ShopCarPage {
  public launchShopCarsURL() {
    cy.visit('/cars/oregon');
  }

  public clickBodyStyleDropdown() {
    cy.get('p')
      .contains('Bodystyle')
      .click();
  }

  public clickCarType(carType: string) {
    cy.get('p')
      .contains(carType)
      .click();
  }

  public clickOnCarDetails() {
    cy.get('.CarBrowserListSection__body div')
      .first()
      .click();
  }

  public checkCarDetailsShown() {
    cy.get('h1 span').should('be.exist');
  }
}

export const shopCarPage: ShopCarPage = new ShopCarPage();
