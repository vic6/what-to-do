var multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7],
  multiplyBy: 2,
  multiply() {
    console.log(this.numbers);
    return this.numbers.map(num => num * this.multiplyBy);
  }
};


ReactDOM.render(templateTwo, document.getElementById("app"));
