Feature: Buscar vuelo


  Scenario: Iniciar sesion en el pagina y busca un vuelo
    Given Im on logged in and Im the right page
    When I fill in the search params with country from: "Mexico" , destination country: "Paris", departure date : "20-11-2022" and passenger: "5"
    Then I should see no results in the page of flights


  @probando
  Scenario Outline: Iniciar sesion en el pagina y busca un vuelo 2
    Given Im on logged in and Im the right page
    When I fill in the search params with country from: <From> , destination country: <To>, departure date : <Date> and passenger: <Passengers>
    Then I should see no results in the page of flights
    Examples:
      | From    | To      | Date            | Passengers |
      | Mexico  | Paris   | 20-11-2022      |       5    |
      | Paris   |  Mexico | 25-11-2022      |       5    |
