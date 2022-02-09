/* === TODO === */
/*
1. add sprites and animations for age 1, 2, and 3
2. once a tomagotchi dies, code stops running
*/

/* === Images === */
const age0_neutral = "https://imgur.com/BHL5rSi.png";
const age1_neutral = "https://imgur.com/F6RzCfP.png";
const age2_neutral = "https://imgur.com/EmVCw1s.png";
const age3_neutral = "https://imgur.com/O6pfwW7.png";

const age0_movementA_happy = "https://imgur.com/3EutgIA.png";
const age0_movementA_sad = "https://imgur.com/TidTTI5.png";
const age0_movementB_happy = "https://imgur.com/DeEFH0A.png";
const age0_movementB_sad = "https://imgur.com/xoWGNm4.png";

const age1_movementA_happy = "https://imgur.com/JsR5FhR.png";
const age1_movementA_sad = "https://imgur.com/BkW7Etk.png";
const age1_movementB_happy = "https://imgur.com/2LTAeVl.png";
const age1_movementB_sad = "https://imgur.com/mhVYd8k.png";

const age2_movementA_happy = "https://imgur.com/dp4k2rg.png";
const age2_movementA_sad = "https://imgur.com/svF0xQC.png";
const age2_movementB_happy = "https://imgur.com/fmoYSK2.png";
const age2_movementB_sad = "https://imgur.com/zZHxH2q.png";

const age3_movementA_happy = "https://imgur.com/lVcxWk4.png";
const age3_movementA_sad = "https://imgur.com/7rIHo3A.png";
const age3_movementB_happy = "https://imgur.com/t4d0MRz.png";
const age3_movementB_sad = "https://imgur.com/a2EIjwy.png";


/* === Instantiate Tamagotchi === */
class Tamagotchi {
  constructor(name) {
    // initial properties:
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
    // user-assigned properties:
    // this.name = prompt("What is your tamagotchi's name?");
    this.name = name;

    console.log(`initial hunger ${this.hunger}, type: ${typeof this.hunger}`);
    console.log(`initial sleepiness ${this.sleepiness}, type: ${typeof this.sleepiness}`);
    console.log(`initial boredom ${this.boredom}, type: ${typeof this.boredom}`);
    console.log(`initial age ${this.age}, type: ${typeof this.age}`);
    console.log(`initial name ${this.name}, type: ${typeof this.name}`);
  }

  increaseHunger(){
    console.log(`increasing hunger to ${this.hunger}`);
    if (this.hunger >= 10) {
      showDeathModal("starvation");
      
    } else {
      this.hunger += 1;
    }
    
  }

  increaseSleepiness(){
    console.log(`increasing sleepiness to ${this.sleepiness}`);
    if (this.sleepiness >= 10) {
      showDeathModal("lack of sleep");
      
    } else {
      this.sleepiness += 1;
    } 
  }

  increaseBoredom(){
    console.log(`increasing boredom to ${this.boredom}`);
    if (this.boredom >= 10) {
      showDeathModal("boredom");

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
/* === Make New Tamagotchi / Input Name === */
let tamagotchi = {};

$(window).on('load', function() {
  $('#name_modal').modal('show');
});

const makeTamagotchi = function() {
  console.log("saveName function called");
  $("#name_modal_footer button").off();
  $('#name_modal').modal('hide');
  tamagotchi = new Tamagotchi($(".modal-body input").val());
}

/* === Decrease Stats Over Time === */
/* I want to offset the increase of hunger, boredom, and sleepiness
so a tamagotchi can't die of all three at the same time.*/
const nineSeconds = 9000;
const tenSeconds = 10000;
const elevenSeconds = 11000;
const fifteenSeconds = 15000;

setInterval(() => tamagotchi.increaseHunger(), nineSeconds);
setInterval(() => tamagotchi.increaseSleepiness(), tenSeconds);
setInterval(() => tamagotchi.increaseBoredom(), elevenSeconds);
setInterval(() => tamagotchi.increaseAge(), fifteenSeconds);


/* === Animate Tamagotchi === */

const determineMood = function(){
  if (tamagotchi.hunger < 5 && tamagotchi.boredom < 5 && tamagotchi.sleepiness < 5) {
    console.log("the tamagotchi is happy");
    return("happy");
  } else {
    console.log("the tamagotchi is sad.");
    return("sad");
  }
}

const ageUpSprite = function() {
  if (tamagotchi.age === 0) {
    // $("#tamagotchi-sprite").attr("src", age0_neutral);
    animateTamagotchi();
  }
  else if (tamagotchi.age === 1) {
    // $("#tamagotchi-sprite").attr("src", age1_neutral);
    animateTamagotchi();
  }  
  else if (tamagotchi.age === 2) {
    // $("#tamagotchi-sprite").attr("src", age2_neutral);
    animateTamagotchi();
  }
  else if (tamagotchi.age >= 3) {
    // $("#tamagotchi-sprite").attr("src", age3_neutral);
    animateTamagotchi();
  }

}

const animateTamagotchi = function() {

  let mood = determineMood();

  if (mood === "sad") {
    if (tamagotchi.age === 0){
      if ($("#tamagotchi-sprite").attr("src") !== age0_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age0_movementB_sad);
      } else if ($("#tamagotchi-sprite").attr("src") === age0_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age0_movementA_sad);
      }
    }
        
    if (tamagotchi.age === 1){
      if ($("#tamagotchi-sprite").attr("src") !== age1_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age1_movementB_sad);
      } else if ($("#tamagotchi-sprite").attr("src") === age1_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age1_movementA_sad);
      }
    }          
    if (tamagotchi.age === 2){
      if ($("#tamagotchi-sprite").attr("src") !== age2_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age2_movementB_sad);
      } else if ($("#tamagotchi-sprite").attr("src") === age2_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age2_movementA_sad);
      }
    }      
    if (tamagotchi.age === 3){
      if ($("#tamagotchi-sprite").attr("src") !== age3_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age3_movementB_sad);
      } else if ($("#tamagotchi-sprite").attr("src") === age3_movementB_sad) {
        $("#tamagotchi-sprite").attr("src", age3_movementA_sad);
      }
    }      


  } else if (mood === "happy") {
    if (tamagotchi.age === 0){
      if ($("#tamagotchi-sprite").attr("src") !== age0_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age0_movementB_happy);
      } else if ($("#tamagotchi-sprite").attr("src") === age0_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age0_movementA_happy);
      }
    } else if (tamagotchi.age === 1) {
      if ($("#tamagotchi-sprite").attr("src") !== age1_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age1_movementB_happy);
      } else if ($("#tamagotchi-sprite").attr("src") === age1_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age1_movementA_happy);
      }
    }          
    if (tamagotchi.age === 2){
      if ($("#tamagotchi-sprite").attr("src") !== age2_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age2_movementB_happy);
      } else if ($("#tamagotchi-sprite").attr("src") === age2_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age2_movementA_happy);
      }
    }      
    if (tamagotchi.age === 3){
      if ($("#tamagotchi-sprite").attr("src") !== age3_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age3_movementB_happy);
      } else if ($("#tamagotchi-sprite").attr("src") === age3_movementB_happy) {
        $("#tamagotchi-sprite").attr("src", age3_movementA_happy);
      }
    }      
  
  }
}

setInterval(ageUpSprite, 1000);

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
    /* === Show Info Modal === */
    $("#info_modal_body").append(`<p>Hunger: ${tamagotchi.hunger} </br> Sleepiness: ${tamagotchi.sleepiness} </br> Boredom: ${tamagotchi.boredom} </br></br> Age: ${tamagotchi.age} </p>`);
    $('#info_modal').modal('show');    
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


/* === Show Modals === */

/* === Death Modal === */
const showDeathModal = function (causeOfDeath){
  console.log(causeOfDeath);
  $("#death_modal_body").append(`<p>${tamagotchi.name} has died from ${causeOfDeath}. </p>`);
  $('#death_modal').modal('show');
  return;
}


/* === Event Listeners === */

$("#name_modal_footer button").click(makeTamagotchi);

$("#info_modal_ok_button").click(function() {
  $("#info_modal_body").empty();
  $('#info_modal').modal('hide');
});

$("#death_modal_footer button").click(function() {
  window.location.reload();
});
