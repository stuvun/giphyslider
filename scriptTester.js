window.onload = function() {

const giphys = document.querySelectorAll(".slider");

let counter = 0;

const buttons = document.querySelectorAll(".buttons");
const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/random?api_key="+api_key+"&tag=&rating=G";

for (let i = 0; i < 3; i++) {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res);
            console.log(res.data.image_original_url);
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            giphys[i].style = styles;
            if (i === 0) { giphys[0].style.visibility = "visible" }
            else {giphys[1].style.visibility = "hidden"; giphys[2].style.visibility = "hidden"}
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
}

// 'PREVIOUS' button
buttons[0].addEventListener("click", (evt) => {
    evt.preventDefault();
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res)
            console.log(res.data.image_original_url);
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            
            // The div ending on the right will change its image url and hide
            // Original order should be [2, 0, 1] --> [1, 2, 0] (after click)
            if (counter === 0) {
                giphys[0].style = styles;
                giphys[0].style.visibility = "hidden";
                giphys[2].style.visibility = "visible";
                counter++
            }
            // [1, 2, 0] --> [0, 1, 2]
            else if (counter === 1 && giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
                giphys[2].style = styles;
                giphys[2].style.visibility = "hidden"
                giphys[1].style.visibility = "visible"
                counter++
            }
            // [0, 1, 2] --> [2, 0, 1] (Back to origin, counter resets)
            else if (counter === 1 && giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
                giphys[1].style = styles;
                giphys[1].style.visibility = "hidden";
                giphys[0].style.visibility = "visible";
                counter = 0
            }
            // [0, 1, 2] --> [2, 0, 1] (Back to origin, counter resets)
            else if (counter === 2 && giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
                giphys[1].style = styles;
                giphys[1].style.visibility = "hidden";
                giphys[0].style.visibility = "visible";
                counter = 0
            }
            // [1, 2, 0] --> [0, 1, 2]
            else if (counter === 2 && giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
                giphys[2].style = styles;
                giphys[2].style.visibility = "hidden";
                giphys[1].style.visibility = "visible";
                counter--
            }
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
})

// 'NEXT' button
buttons[1].addEventListener("click", (evt) => {
    evt.preventDefault();
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res)
            console.log(res.data.image_original_url);
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            
            // The div ending on the right will change its image url
            // Original order should be [2, 0, 1] --> [0, 1, 2] (after click)
            if (counter === 0) {
                giphys[2].style = styles;
                giphys[2].style.visibility = "hidden";
                counter++
            }
            // [0, 1, 2] --> [1, 2, 0]
            else if (counter === 1 && giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
                giphys[0].style = styles;
                giphys[2].style.visibility = "visible";
                giphys[1].style.visibility = "hidden";
                counter++
            }
            // [1, 2, 0] --> [2, 0, 1] (Back to origin, counter resets)
            else if (counter === 1 && giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
                giphys[1].style = styles;
                giphys[0].style.visibility = "visible";
                giphys[2].style.visibility = "hidden"
                counter = 0
            }
            // [1, 2, 0] --> [2, 0, 1] (Back to origin, counter resets)
            else if (counter === 2 && giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
                giphys[1].style = styles;
                giphys[0].style.visibility = "visible";
                giphys[2].style.visibility = "hidden";
                counter = 0
            }
            // [0, 1, 2] --> [1, 2, 0]
            else if (counter === 2 && giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
                giphys[0].style = styles;
                giphys[2].style.visibility = "visible";
                giphys[1].style.visibility = "hidden";
                counter--
            }
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
})
}