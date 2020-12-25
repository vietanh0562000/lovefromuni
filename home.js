
var planets = [
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-uranus_6249-55.jpg",
        alt: "uranus"
    },
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-mercury_6249-49.jpg",
        alt: "mercury",
    },
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-venus_6249-50.jpg",
        alt: "venus",
    },
    {
        src: "https://image.freepik.com/free-vector/flat-design-earth-space_23-2147928242.jpg",
        alt: "earth",
    },
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-mars_6249-52.jpg",
        alt: "mars",
    },
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-jupiter_6249-53.jpg",
        alt: "jupiter",
    },
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-saturn_6249-54.jpg",
        alt: "saturn",
    },
    {
        src: "https://image.freepik.com/free-vector/illustration-planet-neptune_6249-56.jpg",
        alt: "neptune"
    }
];
var currentImg = 0;
function imgPrev() {
    if (currentImg === 0) currentImg = (planets.length - 1);
    else
        currentImg--;
    var img = document.getElementById("planetImg");
    img.src = planets[currentImg].src;
    img.alt = planets[currentImg].alt;
}
function imgNext() {
    if (currentImg === planets.length - 1) currentImg = 0;
    else {
        currentImg++;
    }
    var img = document.getElementById("planetImg");
    img.src = planets[currentImg].src;
    img.alt = planets[currentImg].alt;
}
