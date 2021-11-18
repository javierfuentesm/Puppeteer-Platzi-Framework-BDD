Feature: Logging in

  Scenario: Iniciar sesion en el pagina
    Given Im on the right page
    When I fill in the form with my email: "agent@phptravels.com" and password: "demoag3ent"
    Then I should be dashboard page
