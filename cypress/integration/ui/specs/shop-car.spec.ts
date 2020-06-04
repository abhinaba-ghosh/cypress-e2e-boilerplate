import { shopCarPage } from '../pages';

describe('Shop Cars Page Test', () => {
  before(() => {
    shopCarPage.launchShopCarsURL();
  });

  it('user verifies sell cars details', () => {
    shopCarPage.clickBodyStyleDropdown();
    shopCarPage.clickCarType('SUV');
    shopCarPage.clickOnCarDetails();
    shopCarPage.checkCarDetailsShown();
  });
});
