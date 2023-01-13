
function playAudio(url) {
    console.log("played");
    new Audio(url).play();
  }

  document.addEventListener("keypress",(k)=>{
    if(k.key == "w"){
        playAudio('./sounds/crash.mp3');
    }else if(k.key == 'a'){
        playAudio('./sounds/buzz.mp3');
    }else if(k.key == 's'){
        playAudio('./sounds/buzzer.mp3');
    }else if(k.key == 'd'){
        playAudio('./sounds/crock.mp3');
    }else if(k.key == 'j'){
        playAudio('./sounds/snare.mp3');
    }else if(k.key == 'k'){
        playAudio('./sounds/buzzer.mp3');
    }else if(k.key == 'l'){
        playAudio('./sounds/kick-bass.mp3');
    }
  })