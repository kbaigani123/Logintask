Feature: Login functionality
  As a user
  I want to login into the app
  So that I can access my account

  Scenario Outline: Login with valid credentials
    Given I open the app
    When I login with "<username>" and "<password>"
    Then I should see the dashboard

    Examples:
      | username        | password |
      | STANDARD        | STANDARD |

  Scenario: Login with invalid credentials
    Given I open the app
    When I login with "NO_MATCH" and "NO_MATCH"
    Then I should see an error message
