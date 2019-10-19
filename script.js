window.onload = function() {

const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/random?api_key="+api_key+"&tag=&rating=G";

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("Success!", res)
        console.log(res.data.image_original_url);
        const giphy = document.querySelector(".giphy");
        const imgUrl = res.data.image_original_url;
        const styles = "background-image: url("+imgUrl+");";
        giphy.style = styles;
    })
    .catch(err => {
        console.log("Something went wrong...", err)
    })

const next = document.querySelector("#next");

next.addEventListener("click", (evt) => {
    evt.preventDefault();
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res)
            console.log(res.data.image_original_url);
            const giphy = document.querySelector(".giphy");
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            giphy.style = styles;
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
})
}