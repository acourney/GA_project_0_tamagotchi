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
    // this will change the image of the tamagotchi
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

/* === Set Global Variables for Gameplay === */
const $eat = $(".gg-bowl");
const $lightOn = $(".gg-sun");
const $play = $(".gg-games");
const $time = $(".gg-sand-clock");  
//const $("")
const navBarArray = [$eat, $lightOn, $play, $time];

const selectedTextColor = 'rgb(244, 245, 211)';
const unselectedTextColor = 'rgb(31, 27, 27)';

/* === Set Actions for Buttons === */

const highlightIcons = function(event){
  if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $time.css("color") === unselectedTextColor) {
    
    $eat.css("color", "var(--main-text-color)");
  
  } else if ($eat.css("color") === selectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $time.css("color") === unselectedTextColor) {
    
    $eat.css("color", "var(--secondary-text-color)");
    $lightOn.css("color", "var(--main-text-color)");
  
  } else if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === selectedTextColor && $play.css("color") === unselectedTextColor && $time.css("color") === unselectedTextColor) {
    
    $lightOn.css("color", "var(--secondary-text-color)");
    $play.css("color", "var(--main-text-color)");
  
  } else if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === selectedTextColor && $time.css("color") === unselectedTextColor) {
    
    $play.css("color", "var(--secondary-text-color)");
    $time.css("color", "var(--main-text-color)");
  
  } else {
    
    $time.css("color", "var(--secondary-text-color)");
    $eat.css("color", "var(--main-text-color)");
  
  }

}

const selectAction = function(event){

}

const cancelAction = function(event){

}

$("#A").click(highlightIcons);
$("#B").click(selectAction);
$("#C").click(cancelAction)