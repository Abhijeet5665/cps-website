var img = [
    ["http://i.imgur.com/B1YclC5.jpg", "Birdman or (The Unexpected Virtue of Ignorance) won Best Picture."],
    ["http://i.imgur.com/XjAdinX.jpg", "Eddie Redmayne won Best Actor in a Leading Role for his role in The Theory of Everything."],
    ["http://i.imgur.com/kCj3uvC.jpg", "Julianne Moore won Best Actress in a Leading Role for her role in Still Alice."],
    ["http://i.imgur.com/OJq9hq1.jpg", "J K Simmons won Best Actor in a Supporting Role for his role in Whiplash."],
    ["http://i.imgur.com/qZ4XnIJ.jpg", "Patricia Arguette won Best Actress in a Supporting Role for her role in Boyhood."],
    ["http://i.imgur.com/QTGeTJ6.jpg?1", "Big Hero 6 won Best Animated Feature Film."],
    ["http://i.imgur.com/sYXnpMC.jpg", "Birdman or (The Unexpected Virtue of Ignorance) won Best Cinematography."],
    ["http://i.imgur.com/I0necik.jpg", "The Grand Budapest Hotel won Best Costume Design."],
    ["http://i.imgur.com/WKoIcqp.jpg", "Birdman or (The Unexpected Virtue of Ignorance) won Best Directing."],
    ["http://i.imgur.com/FAOxXO4.jpg", "CitizenFour won Best Documentary Feature."],
    ["http://i.imgur.com/7jWMv2d.jpg", "Crisis Hotline: Veterans Press 1 won Best Documentary Short Subject."],
    ["http://i.imgur.com/WMxECgv.jpg", "Whiplash won Best Film Editing"],
    ["http://i.imgur.com/igS4Vmh.jpg", "Ida won Best Foreign Language Film."],
    ["http://i.imgur.com/6PxTKRo.jpg", "The Grand Budapest Hotel won Best Makeup and Hairstyling."],
    ["http://i.imgur.com/H83ss3z.jpg", "The Grand Budapest Hotel won Best Original Score."],
    ["http://i.imgur.com/pD5LG2o.jpg", "Glory from the film Selma won Best Original Song."],
    ["http://i.imgur.com/7vJYuKI.jpg", "The Grand Budapest Hotel won Best Production Design."],
    ["http://i.imgur.com/Xpe3tVC.jpg", "Feast won Best Animated Short Film."],
    ["http://i.imgur.com/OIe1PGe.png", "American Sniper won Best Sound Editing."],
    ["http://i.imgur.com/PvqfxQe.jpg", "Whiplash won Best Sound Mixing."],
    ["http://i.imgur.com/2Z4jjz7.jpg", "Interstellar won Best Visual Effects."],
    ["http://i.imgur.com/AOciJZ2.jpg", "The Imitation Game won Best Adapted Screenplay."],
    ["http://i.imgur.com/jAWd8MK.jpg", "Birdman or (The Unexpected Virtue of Ignorance) won Best Original Screenplay."],
    ["http://i.imgur.com/sJM5sw2.jpg", "Cat tax."]
];

var i = 0;

function setComic() {
    console.log(img[i]);
    document.getElementById("comic").src = img[i][0];
    document.getElementById("num").textContent = i + 1;
    document.getElementById("title").textContent = img[i][1];
}

setComic();

function prev() {
    i--;
    if (i <= 0) document.getElementsByClassName("prev").disabled = true;
    else document.getElementsByClassName("next").disabled = false;
    setComic();
    console.log(i);
}

function next() {
    i++;
    if (i >= img.length - 1) document.getElementsByClassName("next").disabled = true;
    else document.getElementsByClassName("prev").disabled = false;
    setComic();
    console.log(i);
}
