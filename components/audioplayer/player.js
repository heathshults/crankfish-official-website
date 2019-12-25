document.addEventListener('DOMContentLoaded', function(){
Amplitude.init({
  "songs": [{
      "name": "Represent",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Roland.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    },
    {
      "name": "Walk with Roland",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Roland.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    },
    {
      "name": "King Pin",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/King_Pin.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    },
    {
      "name": "Syllable",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Syllable.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    },
    {
      "name": "Red Swallow",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Red_swallow.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    }

  ]
});


    // $(document).ready((){
       // $('BODY').load('/components/audioplayer/player.html')
      // });
  let thePlayer = `
  <div class="player-container container-fluid">
    <div class="player">
      <div class="album-art-container">
        <img src="/img/cf-cd-cover-2002.jpg" class="album-art"/>
        <div class="song-title">Represent <sup class="number">#1</sup></divv>
        <div class="song-artist">Crankfish</div>
       </div>
    </div>
    
    <div class="meta-container">
        <div class="control-container">
          <div class="amplitude-prev">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>skip-previous</title>
              <path fill="#ffffff" d="M9.516 12l8.484-6v12zM6 6h2.016v12h-2.016v-12z"></path>
            </svg>
          </div>
          <div class="play-pause-contianer hvr-rectangle-out">
            <div class="amplitude-play-pause" data-amplitude-song-index="0">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="play-icon" width="32" height="32" viewBox="0 0 24 24">
            <title>play-arrow</title>
                <path fill="#ffffff" d="M6.516 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
              </svg>
  
          </div>
          </div>
          <div class="amplitude-next">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>skip-next</title>
              <path fill="#ffffff" d="M15.984 6h2.016v12h-2.016v-12zM6 18v-12l8.484 6z"></path>
            </svg>
          </div>
        </div>
        <div class="time-container">
          <span class="current-time">
            <span class="amplitude-current-minutes" data-amplitude-song-index="0"></span>:<span class="amplitude-current-seconds" data-amplitude-song-index="0"></span>
          </span>
          <span style="margin: 0 4px 0 4px;"> / </span>
          <span class="duration">
            <span class="amplitude-duration-minutes" data-amplitude-song-index="0">3</span>:<span class="amplitude-duration-seconds" data-amplitude-song-index="0">30</span>
          </span>
        </div>
        
        <progress class="amplitude-song-played-progress" data-amplitude-song-index="0" id="song-played-progress-1"></progress>
        
        
      </div>
      
      <progress class="amplitude-song-played-progress" data-amplitude-song-index="0" id="song-played-progress-1"></progress>
      
        
      </div>
    </div>
    </div>
  <div id="preload">
   <div id="preload">
    <img src="/img/icons/skip-previous.svg"/>
    <img src="/img/icons/play-arrow.svg"/>
    <img src="/img/icons/pause.svg"/>
    <img src="/img/icons/skip-next.svg"/>
  </div>
</div>`

$('BODY').append(thePlayer)
})

window.load = function() {
  alert('window.load')
 document.getElementById('song-played-progress-1')
 .addEventListener('click', function (e) {
   if (Amplitude.getActiveIndex() == 0) {
     var offset = this.getBoundingClientRect();
     var x = e.pageX - offset.left;
     Amplitude.setSongPlayedPercentage(parseFloat(x) / parseFloat(this.offsetWidth) * 100);
   }
 });
 
document.getElementById('song-played-progress-2')
 .addEventListener('click', function (e) {
   if (Amplitude.getActiveIndex() == 1) {
     var offset = this.getBoundingClientRect();
     var x = e.pageX - offset.left;
     Amplitude.setSongPlayedPercentage(parseFloat(x) / parseFloat(this.offsetWidth) * 100);
   }
 });
}
