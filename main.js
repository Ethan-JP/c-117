function preload(){

}

function setup(){
canvas=createCanvas(400,300) 
canvas.center()
video=createCapture(VIDEO)
video.size(400,300)
video.hide()
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1Lg1h6bgt/model.json",modelLoaded)
}

function draw(){
image(video,0,0,400,300)
classifier.classify(video,gotResults)
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotResults(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    document.getElementById("obj_name").innerHTML=results[0].label
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
}
}