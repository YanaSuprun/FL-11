class Hamburger {
  constructor(type, calories, secret = false) {
    this.type = type;
    let _calories = calories;
    this.secret = secret;

    this.getCalories = () => _calories;
    this.setCalories = (value) => _calories = value;
  }

  addCheese() {
    if(Hamburger.biteCount){
      console.log("Sorry you cannot add cheese");
    } else if(Hamburger.сheeseCount) {
      console.log('Sorry, you can add cheese only once.');
    } else {
      const cheeseCalories = 120;
      const calories = this.getCalories() + cheeseCalories;
      this.setCalories(calories);
      Hamburger.cheeseCount++;
    }
  }

  addTomato() {
    if(Hamburger.biteCount){
      console.log("Sorry you cannot add tomato");
    } else if(Hamburger.tomatoCount > 2) {
      console.log('Sorry, you can add tomato only twice.');
    } else {
      const tomatoCalories = 20;
      const calories = this.getCalories() + tomatoCalories;
      this.setCalories(calories);
      Hamburger.tomatoCount++;
    }
  }

  addSecretIngredient() {
    if(Hamburger.biteCount){
      console.log("Sorry you cannot add secret ingredient");
    } else if(Hamburger.сheeseCount || Hamburger.tomatoCount) {
      console.log('Sorry, you can add secret ingredient only before another ingredient')
    } else if(Hamburger.secretCount) {
      console.log('Sorry, you can add secret ingredient only once.');
    } else {
      const secretCalories = 100;
      const calories = this.getCalories() + secretCalories;
      this.setCalories(calories);
      this.secret = true;
      Hamburger.secretIngredientCount++;
    }
  }

  bite() {
    Hamburger.biteCount++
  }

  info() {
    let cheeseMessage = Hamburger.cheeseCount ? `with cheese,` : '';
    let tomatoMessage = Hamburger.tomatoCount ? `with ${Hamburger.tomatoCount} tomato,` : '';
    let secretMessage = Hamburger.secretCount ? `with secret ingredient,` : '';
    let biteMessage = Hamburger.biteCount? `is bite ${Hamburger.biteCount} times` : '';
    let caloriesMessage = `Total calories: ${this.getCalories()}`
    let message = `${this.type} hamburger: ${secretMessage} ${cheeseMessage} ${tomatoMessage} ${biteMessage}. ${caloriesMessage}`;

    return message;
  }
}

Hamburger.cheeseCount = 0;
Hamburger.tomatoCount = 0;
Hamburger.secretIngredientCount = 0;
Hamburger.biteCount = 0;


const myHamburger = new Hamburger('classic', 600);


console.log(myHamburger);
myHamburger.addSecretIngredient();
myHamburger.addCheese();
myHamburger.addTomato();
myHamburger.addTomato();
myHamburger.bite();
myHamburger.bite();
console.log(myHamburger.info());
