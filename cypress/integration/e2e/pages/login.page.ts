class LoginPage {
  visit(): void {
    cy.visit(`/login`);
  }

  setUserName(userName: string): void {
    cy.get('input[id="username"]').type(userName);
  }

  setUserPassword(password: string): void {
    cy.get('input[id="password"]').type(password);
  }

  clickLoginBtn(): void {
    cy.get('*[id="login"] button').click();
  }

  checkLoginSuccess() {
    cy.get('div[class*="success"]').should('be.exist');
  }
}

export const loginPage: LoginPage = new LoginPage();
