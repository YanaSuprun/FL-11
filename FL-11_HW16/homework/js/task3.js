function Pokemon (type, pokemonType, specie, wings) {
  this.type = type;
  this.specie = specie;
  this.wings = wings;
  this.pokemonType = pokemonType;

  Pokemon.prototype.getType = function () {
    return this.type;
  }

  Pokemon.prototype.getSpecie = function () {
    return this.specie;
  }

  Pokemon.prototype.canFly = function () {
    return this.wings;
  }

  Pokemon.prototype.getPokemonType = function() {
    return this.pokemonType;
  }
}

// Fire pokemons

function Charmander() {
  Pokemon.call(this, arguments);
  this.type = this.constructor.name;
  this.pokemonType = 'Fire';
  this.specie = 'Lizard Pokemon';
  this.wings = false;
  this.evolve = function() {
    return new Charmeleon();
  }
}

function Charmeleon() {
  Charmander.call(this, arguments);
  this.specie = 'Flame Pokemon';
  this.evolve = function() {
    return new Charizard();
  }
}

function Charizard() {
  Charmeleon.call(this, arguments);
  this.wings = true;
  this.evolve = function() {
    return this;
  }
}

Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();


// Electric pokemons

function Pichu() {
  Pokemon.call(this, arguments);
  this.type = this.constructor.name;
  this.pokemonType = 'Electric';
  this.specie = 'Mouse Pokemon';
  this.wings = false;
  this.evolve = function() {
    return new Pikachu();
  }
}

function Pikachu() {
  Pichu.call(this, arguments);
  this.evolve = function() {
    return new Raichu();
  }
}

function Raichu() {
  Pikachu.call(this, arguments);
  this.evolve = function() {
    return this;
  }
}

Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;

const pichu = new Pichu();
const pikachu = new Pikachu();
const raichu = new Raichu();


// for Checking:

// console.log(charmander);
// console.log(charmeleon);
// console.log(charizard);
// console.log(charmander.getType()); // -> “Charmander”
// console.log(charmeleon.getPokemonType() === charizard.getPokemonType()); // -> true
// console.log(charmeleon.evolve().constructor === Charizard); // -> true
// console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
// console.log(charmander.canFly()); // -> false
// console.log(charmander.canFly() === charmeleon.canFly()); // -> true

// console.log(pichu);
// console.log(pikachu);
// console.log(raichu);
// console.log(pichu.getType());
// console.log(raichu.getSpecie());
// console.log(pichu.evolve()); // Pikachu
// console.log(pikachu.getSpecie()); // -> “Mouse Pokémon”