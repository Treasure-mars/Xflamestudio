
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim

var names = [
"Yaakov", 
"John", 
"Jen", 
"Jason", 
"Paul", 
"Frank", 
"Larry", 
"Paula", 
"Laura", 
"Jim"
];

for (var i = 0;i < 10;i++) {
var plc_holder = names [i];
  if (plc_holder[0] == "J") {
    speakHello.speak(names[i]);
  } else {
    speakgoodbye.speak(names[i]);
  }
}
