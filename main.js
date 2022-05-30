Webcam. set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}) ;
camera=document.getElementById("camera");
Webcam.attach('#camera');
function papermate(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="monster">';
    });
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/spC5P7yc1/model.json',modelloaded);
function modelloaded(){
    console.log('modelloadded');

}
prediction1="";
prediction2="";
function speak() {
    var synth=window.speechSynthesis;
    speak1="the first prediction is"+prediction1;
    speak2="and the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}