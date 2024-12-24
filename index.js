 var value = 0
  function muted(e){
    elementAudio.pause();
    buttonStopAudio.style.display = 'none';
    buttonPlayAudio.style.display = 'block';
    buttonStopAudio.removeEventListener('click', muted)
    buttonPlayAudio.addEventListener('click', played)
  }
  function played(e){
    elementAudio.play();
    buttonPlayAudio.style.display = 'none';
    buttonStopAudio.style.display = 'block';
    buttonPlayAudio.removeEventListener('click', played)
    buttonStopAudio.addEventListener('click', muted)
  }
  
  var elementAudio = document.getElementById('music');
  elementAudio.volume = 0.01;
  const buttonStopAudio = document.getElementById('icon-stop-music')
  const buttonPlayAudio = document.getElementById('icon-play-music')
  buttonStopAudio.addEventListener('click', muted)


  document.addEventListener("DOMContentLoaded", () => {
    const numberButton = document.getElementById("button-defi");
    numberButton.addEventListener("click", (e) => {
      const number = document.getElementById("number-input").value.trim();
      value = number;
      //window.location.href = "/defis.html?id="+value;
      window.location.href = "https://skalucska.github.io/GiftChritmas/defis.html?id="+value;
    });
  
    document.body.addEventListener("keydown", (KeyboardEvent) => {
      if(KeyboardEvent.code === "Enter"){
        const numberElement = document.getElementById("number-input");
        const activeElement = document.activeElement;
        if(activeElement === numberElement){
          const number = document.getElementById("number-input").value.trim();
          value = number;
          //window.location.href = "/defis.html?id="+value;
          window.location.href = "https://skalucska.github.io/GiftChritmas/defis.html?id="+value;
        }
      }
    })
  });
  

  