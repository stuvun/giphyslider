var a = 0;

const buttons = document.querySelectorAll(".button");

const giphy = document.querySelector(".image")

const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/trending?api_key="+api_key+"&limit=100&rating=G";

buttons[0].style.visibility = "hidden";

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("Success!", res);

        console.log(res.data[0].images.downsized_large.url);

        giphy.src = res.data[0].images.downsized_large.url;

        buttons[1].addEventListener("click", function(evt) {
            evt.preventDefault();

            a = a + 1;
            console.log(a);

            giphy.src = "null;"
            giphy.src = res.data[a].images.downsized_large.url;
            console.log(res.data[a].images.downsized_large.url);

            if (buttons[0].style.visibility == "hidden") { 
                buttons[0].style.visibility = "null;";
                buttons[0].style.visibility = "visible"
            } else { return buttons[0].style.visibility }
        })
    
        buttons[0].addEventListener("click", function(evt) {
            evt.preventDefault();

            if (a == 1) {
                a = a - 1;
                buttons[0].style.visibility = "null;";
                buttons[0].style.visibility = "hidden";
                console.log(a)
            } else { a = a - 1; console.log(a) }

            giphy.src = "null;"
            giphy.src = res.data[a].images.downsized_large.url;
            console.log(res.data[a].images.downsized_large.url);
        })
    })
    .catch(err => {
        console.log("Something went wrong...", err)
    })