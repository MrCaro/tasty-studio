let circle = document.getElementById('circle');
let body = document.body;
let radius = 10;


circle.addEventListener('mousemove', e => {
    Math.floor(Math.random() * Math.floor(radius))
    radius += 5;
    body.style.background = "linear-gradient(" + radius * (-1) + "deg ,#E479E7, #94AFF1, #59D6F8)";
    circle.style.transform = "rotate(" + radius + "deg)";
    console.log(radius);
});