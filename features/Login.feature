Feature: Logging in

  Scenario: Iniciar sesion en el pagina
    Given Im on the right page
    When I fill in the form with my email: "agent@phptravels.com" and password: "demoagent"
    Then I should be dashboard page