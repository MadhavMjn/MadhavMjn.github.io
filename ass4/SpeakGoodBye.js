var byeWord = {};
byeWord.value="GoodBye";

var byeSpeaker={
    speak: function(name){
        console.log(byeWord.value + " " + name);
    }
}