
let thePlayerUI = `
<div class="player-container container-fluid b-g-a">
     <div class="player">
       <div class="album-art-container"><img src="/img/cf-cd-cover-2002.jpg" class="album-art" /></div>
       <div class="meta-container">
         <div class="title-artist-container">
           <div class="meta-data-wrapper">
            <div id="songTitle" class="song-title">
              <span data-amplitude-song-info="name" data-amplitude-main-song-info="true" class="song-name"></span>
            </div>
           <div id="songArtist" class="song-artist">
             <span data-amplitude-song-info="artist" data-amplitude-main-song-info="true" class="song-artist"></span>
            </div>
         </div>
       </div>
       <div class="control-container">
         <div class="amplitude-prev"></div>
         <div class="play-pause-contianer hvr-rectangle-out">
           <div class="amplitude-play-pause" data-amplitude-song-index="0">
           </div>
         </div>
         <div class="amplitude-next">
         </div>
       </div>
       <div class="time-container">00:00 / 00:00</div>
     </div>
   </div>

   </div>
`
$('BODY').append(thePlayerUI)
