var HelloWord = {};
HelloWord.value="Hello";
var helloSpeaker={
    speak: function(name){
        console.log(HelloWord.value + " " + name);
    }
}