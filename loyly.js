document.getElementById('button1').addEventListener('click', function () {
    console.log('button1 is clicked');
    var audio = new Audio('loyly1.mp3');
    audio.play();

    let anima2 = document.getElementById('anima2');
    anima2.style.display="flex";
});

document.getElementById('button2').addEventListener('click', function () {
    console.log('button2 is clicked');
    var audio = new Audio('loyly2.mp3');
    audio.play();

});

document.getElementById('button3').addEventListener('click', function () {
    console.log('button3 is clicked');
    var audio = new Audio('loyly3.mp3');
    audio.play();
});

document.getElementById('button4').addEventListener('click', function () {
    console.log('button4 is clicked');
    var audio = new Audio('loyly4.mp3');
    audio.play();

});


//jQuery method
//let loylyButton = document.querySelector('.main')

// $(document).ready(function(){
//     $("button1").click(function(){
//         let Button1 = new Audio("");
//         audio.play();
//     });

//     $("button2").click(function(){
//         let Button1 = new Audio("");
//         audio.play();
//     });
// });

