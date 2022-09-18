//getters are used to access object properties
//setters are used to change them
class Thermostat {
    constructor(tempF) {
      this.tempF =tempF;
    }
    get temperature() {
      return 5/9 * (this.tempF - 32);
    }
  
    set temperature(tempC) {
      this.tempF= tempC * 9.0 / 5 + 32;
    }
  }