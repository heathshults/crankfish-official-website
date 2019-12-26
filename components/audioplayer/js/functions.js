Amplitude.init({
  "songs": [{
      "name": "Represent",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/Represent.mp3",
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


document.getElementById('song-played-progress-1').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 0 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

