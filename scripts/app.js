console.log("tamagotchi loaded.");
/* === Instantiate Tamagotchi === */
class Tamagotchi {
  constructor() {
    // initial properties:
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
    // user-assigned properties:
    this.name = prompt("What is your tamagotchi's name?");
  }

  increaseHunger(){
    return this.hunger += 0.2;
  }

  increaseSleepiness(){
    return this.sleepiness += 0.2;
  }

  increaseBoredom(){
    return this.boredom += 0.2;
  }

  increaseAge(){
    return this.age += 1;
  }

  eat(food){
    console.log(`${this.name} just ate ${food}`);
  }

  sleep(time){
    console.log(`${this.name} just slept for ${time} minutes`);
  }

  play(game){
    console.log(`${this.name} just played ${game}`);
  }
}

const tamagotchi = new Tamagotchi();

/* === Age Tamagotchi and Decrease Stats Over Time === */

setInterval(tamagotchi.increaseHunger, 1800000);
setInterval(tamagotchi.increaseSleepiness, 1800000);
setInterval(tamagotchi.increaseBoredom, 1800000);
setInterval(tamagotchi.increaseAge, 1800000);


