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
        
        // const giphy1 = document.querySelector(".giphy1");
        // const giphy2 = document.querySelector(".giphy2");
        // const giphy3 = document.querySelector(".giphy3");

        giphy.src = res.data[0].images.downsized_large.url;
        // giphy2.style.background = "url("+res.data[0].images.downsized_large.url+");";
        // giphy3.style.background = "url("+res.data[0].images.downsized_large.url+");";

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

            // giphys.forEach(function(gif) {
            //     gif.style.background = "null;";
            //     gif.style.background = backgrounds
            // })
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

            // giphys.forEach(function(gif) {
            //     gif.style.background = "null;";
            //     gif.style.background = backgrounds
            // })
        })
    })
    .catch(err => {
        console.log("Something went wrong...", err)
    })
    
    // <-- 'PREVIOUS' button
//     buttons[0].addEventListener("click", (evt) => {
//         evt.preventDefault();
        
//         fetch(url)
//             .then(res => {
//                 return res.json()
//             })
//             .then(res => {
//                 console.log("Success!", res)
//                 console.log(res.data.image_original_url);
//                 let imgUrl = res.data.image_original_url;
//                 let show = "background-image: url("+imgUrl+");"
//                 let hide = "background-image: url("+imgUrl+");"

//                 if (giphys[0].style == show) {
//                     giphys[0].style = hide;
//                     giphys[1].style = show
//                 } else if (giphys[1].style == show) {
//                     giphys[1].style = hide;
//                 } else if (giphys[2].style == show) {
//                     giphys[2].style = hide;
//                 }
//             })
//             .catch(err => {
//                 console.log("Something went wrong...", err)
//             })
//     })
    
//     // 'NEXT' --> button
//     buttons[1].addEventListener("click", (evt) => {
//         evt.preventDefault();
//         fetch(url)
//             .then(res => {
//                 return res.json()
//             })
//             .then(res => {
//                 console.log("Success!", res)
//                 console.log(res.data.image_original_url);
//                 let imgUrl = res.data.image_original_url;
//                 let styles = "background-image: url("+imgUrl+");";
                
//                 // The div ending on the right will change its image url and hide | The middle div will show
//                 // Original order should be [2, 0, 1] --> [0, 1, 2] (after click)
//                 if (giphys[2].style.visibility == "hidden" && giphys[1].style.visibility == "hidden") {
//                     giphys[2].style = styles;
//                     giphys[1].style.visibility = "visible";
//                     giphys[2].style.visibility = "hidden"
//                 }
//                 // [0, 1, 2] --> [1, 2, 0]
//                 else if (giphys[0].style.visibility == "hidden" && giphys[2].style.visibility == "hidden") {
//                     giphys[0].style = styles;
//                     giphys[2].style.visibility = "visible";
//                     giphys[1].style.visibility = "hidden"
//                 }
//                 // [1, 2, 0] --> [2, 0, 1] (Back to origin)
//                 else if (giphys[1].style.visibility == "hidden" && giphys[0].style.visibility == "hidden") {
//                     giphys[1].style = styles;
//                     giphys[0].style.visibility = "visible";
//                     giphys[2].style.visibility = "hidden"
//                 }
//             })
//             .catch(err => {
//                 console.log("Something went wrong...", err)
//             })
//     })
// }