//SanityCheck
alert("biggo");

// let audioElement = document.createElement('audio');
// audioElement.setAttribute('src', 'test12.mp3');
// audioElement.load()
// audioElement.getElementById = "submitGuess".addEventListener("load", function() {
//   audioElement.play();
//   $(".duration span").html(audioElement.duration);
//   $(".filename span").html(audioElement.src);
// },
// true);
//
// audioElement.src;
// audioElement.duration;
//
// audioElement.currentTime=35;ß
// audioElement.play();

audio = $'', {
‘loop’	    : 'Rapper1',
‘autoplay’	: ‘autoplay’
});

if (audio[0].canPlayType(‘audio/mpeg’)){
$(”, {
‘src’	: ‘test12.mp3’,
‘type’	: ‘audio/mpeg’
}).appendTo(audio);
}
if (audio[0].canPlayType(‘audio/ogg’)){
$(”, {
‘src’	  : ‘/audio/le.og’,
‘type’	: ‘audio/mpeg’
}).appendTo(audio);
}



function Rapper(name, birthName, dateOfBirth, song, lyric, picture){
  this.name        = name;
  this.birthName   = birthName;
  this.dateOfBirth = dateOfBirth;
  this.origin      = origin;
  this.song        = song;
  this.lyric       = lyric;
  this.picture     = picture;
}
let	rapper1	 = new Rapper
  ("Pimp C","Chad Butler","December 29, 1973","Port Arthur Texas","some song","some lyric", "some picture");
let	rapper2	 = new Rapper
  ("Gucci Mane","Radric Davis","February 12, 1980","Atlanta, Georgia","some song","some lyric","some picture");
let	rapper3	 = new Rapper
  ("Rakim","William Griffin, Jr.","January 28, 1968","New York, New York","some song","some lyric","some picture");
let	rapper4	 = new Rapper
  ("Big Daddy Kane","Antonio Hardy","September 10, 1968","New York, New York","some song","some lyric","some picture");
let	rapper5	 = new Rapper
  ("Future","Nayvadius Wilburn","November 20, 1983","Atlanta, Georgia","some song","some lyric","some picture");
