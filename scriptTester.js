window.onload = function() {

const giphys = document.querySelectorAll(".slider");

const buttons = document.querySelectorAll(".buttons");
const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/random?api_key="+api_key+"&tag=&rating=G";

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("Success!", res);
        console.log(res.data.image_original_url);

        let imgUrl = res.data.image_original_url;
        let styles = "background-image: url("+imgUrl+");";
        giphys[0].style = styles;
    })
    .catch(err => {
        console.log("Something went wrong...", err)
    })

// <-- 'PREVIOUS' button
buttons[0].addEventListener("click", (evt) => {
    evt.preventDefault();
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res)
            console.log(res.data.image_original_url);
            let imgUrl = res.data.image_original_url;
            let styles = "background-image: url("+imgUrl+");";
            
            // The div ending on the right will change its image url and hide | The middle div will show
            // Original order should be [2, 0, 1] --> [1, 2, 0] (after click)
            if (giphys[2].style.visibility == "hidden" && giphys[1].style.visibility == "hidden") {
                giphys[0].style = styles;
                giphys[0].style.visibility = "hidden";
                giphys[2].style.visibility = "visible";
            }
            // [1, 2, 0] --> [0, 1, 2]
            else if (giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
                giphys[2].style = styles;
                giphys[2].style.visibility = "hidden";
                giphys[1].style.visibility = "visible"
            }
            // [0, 1, 2] --> [2, 0, 1] (Back to origin)
            else if (giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
                giphys[1].style = styles;
                giphys[1].style.visibility = "hidden";
                giphys[0].style.visibility = "visible"
            }
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
})

// 'NEXT' --> button
buttons[1].addEventListener("click", (evt) => {
    evt.preventDefault();
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res)
            console.log(res.data.image_original_url);
            let imgUrl = res.data.image_original_url;
            let styles = "background-image: url("+imgUrl+");";
            
            // The div ending on the right will change its image url and hide | The middle div will show
            // Original order should be [2, 0, 1] --> [0, 1, 2] (after click)
            if (giphys[2].style.visibility == "hidden" && giphys[1].style.visibility == "hidden") {
                giphys[2].style = styles;
                giphys[1].style.visibility = "visible";
                giphys[2].style.visibility = "hidden"
            }
            // [0, 1, 2] --> [1, 2, 0]
            else if (giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
                giphys[0].style = styles;
                giphys[2].style.visibility = "visible";
                giphys[1].style.visibility = "hidden"
            }
            // [1, 2, 0] --> [2, 0, 1] (Back to origin)
            else if (giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
                giphys[1].style = styles;
                giphys[0].style.visibility = "visible";
                giphys[2].style.visibility = "hidden"
            }
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
})
}