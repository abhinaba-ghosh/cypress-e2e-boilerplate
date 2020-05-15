Feature: Page Login
  As a user, I want to login to the page

  Scenario: user checks login is successful
    Given user navigates to the target login page
    And user enter "tomsmith" and "SuperSecretPassword!"
    When user click the login button
    Then user should see the login success message