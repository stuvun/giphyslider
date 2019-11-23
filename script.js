let a = 0;
const buttons = document.querySelectorAll(".button");
const giphyContainer = document.querySelectorAll(".giphyContainer");
const giphy = document.querySelectorAll(".image");

const slideWidth = 100;
const slideCount = 3;
let currentSlide = 1;

const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/trending?api_key="+api_key+"&limit=100&rating=G";

buttons[0].style.visibility = "hidden";

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("Success!", res);
        giphySwitchMinus = () => {
            let delta = currentSlide * slideWidth;
            giphy.forEach((gif, index) => {
                let gifPosition = a + index;
                gif.src = "null;";
                gif.src = res.data[gifPosition].images.downsized_large.url;
                console.log(res.data[gifPosition].images.downsized_large.url)
            })
            if (currentSlide < slideCount) {
                giphyContainer.style = `transform: translateX(+${delta}vw);`;
                currentSlide = currentSlide - 1
            } else {
                giphyContainer.style = 'transform: translateX(0vw);';
                currentSlide = 3
            }
        }
        giphySwitchPlus = () => {
            let delta = currentSlide * slideWidth;
            giphy.forEach((gif, index) => {
                let gifPosition = a + index;
                gif.src = "null;";
                gif.src = res.data[gifPosition].images.downsized_large.url;
                console.log(res.data[gifPosition].images.downsized_large.url)
            })
            if (currentSlide < slideCount) {
                giphyContainer.style = `transform: translateX(-${delta}vw);`;
                currentSlide = currentSlide + 1
            } else {
                giphyContainer.style = 'transform: translateX(0vw);';
                currentSlide = 1
            }
        }
        console.log(res.data[0].images.downsized_large.url);

        buttons[0].addEventListener("click", function(e) {
            e.preventDefault();
            if (a == 1) {
                a = a - 1;
                buttons[0].style.visibility = "null;";
                buttons[0].style.visibility = "hidden";
                console.log(a);
                giphySwitchMinus()
            } else {
                a = a - 1;
                console.log(a)
            }
        })

        buttons[1].addEventListener("click", function(e) {
            e.preventDefault();
            a = a + 1;
            console.log(a);
            giphySwitchPlus();
            if (buttons[0].style.visibility == "hidden") { 
                buttons[0].style.visibility = "null;";
                buttons[0].style.visibility = "visible"
            } else {
                return buttons[0].style.visibility
            }
        })
    })
    .catch(err => {
        console.log("Something went wrong...", err)
    })