Feature: Buscar vuelo
  @probando
  Scenario: Iniciar sesion en el pagina y busca un vuelo
    Given Im on logged in and Im the right page
    When I fill in the search params with country from: "Mexico" , destination country: "Paris", departure date : "20-11-2022" and passenger: "5"
    Then I should see no results in the page of flights
