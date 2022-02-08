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

    console.log(`initial hunger ${this.hunger}, type: ${typeof this.hunger}`);
    console.log(`initial sleepiness ${this.sleepiness}, type: ${typeof this.sleepiness}`);
    console.log(`initial boredom ${this.boredom}, type: ${typeof this.boredom}`);
    console.log(`initial age ${this.age}, type: ${typeof this.age}`);
    console.log(`initial name ${this.name}, type: ${typeof this.name}`);
  }

  increaseHunger(){
    console.log(`increasing hunger to ${this.hunger}`);
    if (this.hunger >= 10) {
      window.alert(`${this.name} died from starvation. Game over.`);
      window.location.reload();
    } else {
      this.hunger += 1;
    }
    
  }

  increaseSleepiness(){
    console.log(`increasing sleepiness to ${this.sleepiness}`);
    if (this.sleepiness >= 10) {
      window.alert(`${this.name} died from lack of sleep. Game over.`);
      window.location.reload();
    } else {
      this.sleepiness += 1;
    } 
  }

  increaseBoredom(){
    console.log(`increasing boredom to ${this.boredom}`);
    if (this.boredom >= 10) {
      window.alert(`${this.name} died from boredom. Game over.`);
      window.location.reload();
    } else {
      this.boredom += 1;
    }
  }

  increaseAge(){
    console.log(`increasing age to ${this.age}`);
    if (this.age < 3 ) {
      this.age += 1;
    }
  }

  eat(food){
    console.log(`${this.name} just ate ${food}`);
    if (this.hunger > 0) {
      return this.hunger -= 1;
    }
    return this.hunger;
  }

  sleep(time){
    console.log(`${this.name} just slept for ${time} night`);
    if (this.sleepiness > 0) {
      return this.sleepiness -= 1;
    }
    return this.sleepiness;
  }

  play(game){
    console.log(`${this.name} just played ${game}`);
    if (this.boredom > 0) {
      return this.boredom -= 1;
    }
    return this.boredom;
  }

}

const tamagotchi = new Tamagotchi();

/* === Age Tamagotchi and Decrease Stats Over Time === */

const fifteenSeconds = 10000;

setInterval(() => tamagotchi.increaseHunger(), fifteenSeconds);
setInterval(() => tamagotchi.increaseSleepiness(), fifteenSeconds);
setInterval(() => tamagotchi.increaseBoredom(), fifteenSeconds);
setInterval(() => tamagotchi.increaseAge(), fifteenSeconds);


const animateTamagotchi = function() {
  if (tamagotchi.age === 0) {
    if ($("#tamagotchi-sprite").attr("src") === 'https://i.imgur.com/DanpbUo.png') {
      $("#tamagotchi-sprite").attr("src", "https://i.imgur.com/jhYgLVZ.png");
    } else if ($("#tamagotchi-sprite").attr("src") === 'https://i.imgur.com/jhYgLVZ.png') {
      $("#tamagotchi-sprite").attr("src", "https://i.imgur.com/DanpbUo.png");
    }
  }
}

setInterval(animateTamagotchi, 1000);

/* === Set Global Variables for Gameplay === */
const $eat = $(".gg-bowl");
const $sleep = $("#bed-icon");
const $play = $(".gg-games");
const $info = $(".gg-info");  
//const $("")
const navBarArray = [$eat, $sleep, $play, $info];

const selectedTextColor = 'rgb(244, 245, 211)';
const unselectedTextColor = 'rgb(31, 27, 27)';

/* === Set Actions for Buttons === */

const highlightIcons = function(){
  if ($eat.css("color") === unselectedTextColor && $sleep.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $eat.css("color", "var(--main-text-color)");
    
  
  } else if ($eat.css("color") === selectedTextColor && $sleep.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $eat.css("color", "var(--secondary-text-color)");
    $sleep.css("color", "var(--main-text-color)");
  
  } else if ($eat.css("color") === unselectedTextColor && $sleep.css("color") === selectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $sleep.css("color", "var(--secondary-text-color)");
    $play.css("color", "var(--main-text-color)");
    
  
  } else if ($eat.css("color") === unselectedTextColor && $sleep.css("color") === unselectedTextColor && $play.css("color") === selectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $play.css("color", "var(--secondary-text-color)");
    $info.css("color", "var(--main-text-color)");
    
  
  } else {
    
    $info.css("color", "var(--secondary-text-color)");
    $eat.css("color", "var(--main-text-color)");
    
  
  }

}

const selectAction = function(){
  if ($eat.css("color") === unselectedTextColor && $sleep.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    console.log("nothing selected");
  
  } else if ($eat.css("color") === selectedTextColor && $sleep.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    tamagotchi.eat('food');
  
  } else if ($eat.css("color") === unselectedTextColor && $sleep.css("color") === selectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    tamagotchi.sleep(1);

  } else if ($eat.css("color") === unselectedTextColor && $sleep.css("color") === unselectedTextColor && $play.css("color") === selectedTextColor && $info.css("color") === unselectedTextColor) {
    
    tamagotchi.play('games');

  } else {
    window.alert(`    hunger: ${tamagotchi.hunger}
    sleepiness: ${tamagotchi.sleepiness}
    boredom: ${tamagotchi.boredom}
    age: ${tamagotchi.age}
    If hunger, sleepiness, or boredom reach 10,
    your tamagotchi will die.

    The oldest age possible is 3.`);
    
  }
  
}

const cancelAction = function(){
  $eat.css("color", "var(--secondary-text-color)");
  $sleep.css("color", "var(--secondary-text-color)");
  $play.css("color", "var(--secondary-text-color)");
  $info.css("color", "var(--secondary-text-color)");
}

$("#A").click(highlightIcons);
$("#B").click(selectAction);
$("#C").click(cancelAction);