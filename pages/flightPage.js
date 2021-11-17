const { I } = inject();

class FlightsPage {
  constructor() {
    this.mainDiv = ".main_search";
    this.inputs = {
      from: "#autocomplete",
      to: "#autocomplete2",
      date: "#departure",
      passengers: ".dropdown-toggle.dropdown-btn.waves-effect",
      search: "#flights-search",
      firstOption: ".autocomplete-result[data-index='0']",
      moreAdultsPassengers: "(//i[@class='la la-plus'])[1]",
    };
  }

  validatePage() {
    I.waitForElement(this.mainDiv);
    I.waitForElement(this.inputs.from);
    I.waitForElement(this.inputs.to);
    I.waitForElement(this.inputs.date);
    I.waitForElement(this.inputs.passengers);
    I.waitForElement(this.inputs.search);
  }

  selectFlight(from, to, date, passengers) {
    //Llenamos el campo de origen
    I.fillField(this.inputs.from, from);
    I.click(this.inputs.firstOption);

    //Llenamos el campo de destino
    I.fillField(this.inputs.to, to);
    I.click(this.inputs.firstOption);

    //Llenamos el campo de fecha
    I.fillField(this.inputs.date, date);

    //Llenamos el campo de pasajeros
    if (passengers !== 1) {
      I.click(this.inputs.passengers);
      //Iterar hasta que seleccionemos el numero de pasajeros
      for (let i = 0; i < passengers - 1; i++) {
        I.click(this.inputs.moreAdultsPassengers);
      }
    }

    I.click(this.inputs.search);
  }
}

module.exports = new FlightsPage();
module.exports.FlightsPage = FlightsPage;
