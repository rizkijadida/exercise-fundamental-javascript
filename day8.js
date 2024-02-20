class shootingGame {
 constructor (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
 };
 
   getRandomItem(){
     const random = [
        {health: 10, power: 0},
        {health: 0, power: 10}
     ];
     const compChoice = Math.floor(Math.random()*1.9);
     const randomItem = random[compChoice];

     return randomItem;
   };

 start () {};
};

class player {
    constructor (name) {
     this.name = name;
     this.heath = 100;
     this.power = 100;
    }

    hit(power) {
        const power = Math.floor(Math.random()*1.9);
        player.health = this.name(health) - power
        result = player.health;
    };

    useItem (item) {
        const item = hit(result) + 10;
        
    };

};

const player1 = new player("muksal");
const player2 = new player ("siti");
const shootingGame1 =  new shootingGame(player1, player2);