class Fighter {
  constructor(settings) {
    let wins = 0;
    let loses = 0;
    const maxHealth = settings.hp;

    this.getName = () => settings.name;
    this.getDamage = () => settings.damage;
    this.getHealth = () => settings.hp;
    this.getAgility = () => settings.agility;

    this.attack = (defender) => {
      const minAgility = 1;
      const maxAgility = 100;
      const randProbability = Math.floor(Math.random() * (maxAgility + 1 - minAgility));

      if (randProbability <= maxAgility - defender.getAgility()) {
        defender.dealDamage(settings.damage);
        console.log(`${settings.name} make ${settings.damage} damage to ${defender.getName()}`);
      } else {
        console.log(`${settings.name} attack missed`);
      }
    };

    this.dealDamage = (health) => {
      settings.ph <= 0 ? settings.ph = 0 : settings.hp -= health;
    };

    this.heal = (health) => {
      settings.hp + health > maxHealth ? settings.hp = maxHealth : settings.hp += health;
    };

    this.logCombatHistory = () => `Name: ${settings.name}, Wins: ${wins}, Loses: ${loses}`;
    this.addWin = () => wins++;
    this.addLoss = () => loses++;
  }
}

const myFighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Alex', damage: 25, hp: 100, agility: 30});

function battle(player1, player2) {
  while(player1.getHealth() && player2.getHealth()) {
    player1.attack(player2);
    if (player2.getHealth()) {
      player2.attack(player1);
    }
  }

  if (!player1.getHealth()) {
    player2.addWin();
    player1.addLoss();
    console.log(`${player1.getName()} is dead and can not fight`);
  } else {
    player1.addWin();
    player2.addLoss();
    console.log(`${player2.getName()} is dead and can not fight`);
  }
}

battle(myFighter1, myFighter2);
console.log(`health${myFighter1.getName()}: ${myFighter1.getHealth()}`);
console.log(`health${myFighter2.getName()}: ${myFighter2.getHealth()}`);
console.log(myFighter1.logCombatHistory());
console.log(myFighter2.logCombatHistory());

battle(myFighter1, myFighter2);
