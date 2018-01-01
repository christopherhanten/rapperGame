//SanityCheck
alert("biggo");

let audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'loading.mp3');
audioElement.play();

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'Mogwai2009-04-29_acidjack_t16.ogg');
audioElement.load()
audioElement.addEventListener("load", function() {
  audioElement.play();
  $(".duration span").html(audioElement.duration);
  $(".filename span").html(audioElement.src);
}, true);






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
