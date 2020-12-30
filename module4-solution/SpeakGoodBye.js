
(function (window) {
  var speakgoodbye = {}, speakWord = "Good Bye";
  speakgoodbye.speak = function speak(name) {
    console.log(speakWord + " " +name);
  }

  window.speakgoodbye = speakgoodbye;

})(window);
