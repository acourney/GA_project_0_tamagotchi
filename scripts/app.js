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
    return this.hunger += 1;
  }

  increaseSleepiness(){
    return this.sleepiness += 1;
  }

  increaseBoredom(){
    return this.boredom += 1;
  }

  increaseAge(){
    return this.age += 1;
    // this will change the image of the tamagotchi
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

setInterval(tamagotchi.increaseHunger, 1800000);
setInterval(tamagotchi.increaseSleepiness, 1800000);
setInterval(tamagotchi.increaseBoredom, 1800000);
setInterval(tamagotchi.increaseAge, 1800000);

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
const $lightOn = $(".gg-sun");
const $play = $(".gg-games");
const $info = $(".gg-info");  
//const $("")
const navBarArray = [$eat, $lightOn, $play, $info];

const selectedTextColor = 'rgb(244, 245, 211)';
const unselectedTextColor = 'rgb(31, 27, 27)';

/* === Set Actions for Buttons === */

const highlightIcons = function(){
  if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $eat.css("color", "var(--main-text-color)");
    
  
  } else if ($eat.css("color") === selectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $eat.css("color", "var(--secondary-text-color)");
    $lightOn.css("color", "var(--main-text-color)");
  
  } else if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === selectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $lightOn.css("color", "var(--secondary-text-color)");
    $play.css("color", "var(--main-text-color)");
    
  
  } else if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === selectedTextColor && $info.css("color") === unselectedTextColor) {
    
    $play.css("color", "var(--secondary-text-color)");
    $info.css("color", "var(--main-text-color)");
    
  
  } else {
    
    $info.css("color", "var(--secondary-text-color)");
    $eat.css("color", "var(--main-text-color)");
    
  
  }

}

const selectAction = function(){
  if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    console.log("nothing selected");
  
  } else if ($eat.css("color") === selectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    tamagotchi.eat('food');
  
  } else if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === selectedTextColor && $play.css("color") === unselectedTextColor && $info.css("color") === unselectedTextColor) {
    
    tamagotchi.sleep(1);

  } else if ($eat.css("color") === unselectedTextColor && $lightOn.css("color") === unselectedTextColor && $play.css("color") === selectedTextColor && $info.css("color") === unselectedTextColor) {
    
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
  $lightOn.css("color", "var(--secondary-text-color)");
  $play.css("color", "var(--secondary-text-color)");
  $info.css("color", "var(--secondary-text-color)");
}

$("#A").click(highlightIcons);
$("#B").click(selectAction);
$("#C").click(cancelAction);