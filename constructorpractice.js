function Hiphop(artists, genre, single, sT){
  // paramaters can be ANYTHING (x,y or 1,2) we write it like this to make is easier to understand concepts
  this.artist = artist;
  // each line in a function is a declariation so we end these lines with a semicolon.
  // for literal notation we use commas and with literal notation we start it with var.
  this.genre = genre;
  this.single = single;
  this.sailingTeam = sT;
  // two methods that has action -- methods are actions tied to an option
  this.playMusic = function(){
    console.log("Music is playing")
  }
  this.tour = function(){
    console.log("In da bus")
  }
}

var cardiB = new Hiphop("Cardi B","female rap", "Foreva",false);
