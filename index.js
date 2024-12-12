 
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
    const elementBenDefi = document.getElementById("button-defi-benjamin");
    elementBenDefi.addEventListener("click", (e) => {
        window.location.href = "/defis.html"
    })
  })
  

  