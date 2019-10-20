window.onload = function() {

const api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
const url = "https://api.giphy.com/v1/gifs/random?api_key="+api_key+"&tag=&rating=G";

const giphy1 = document.querySelector(".giphy1");
const giphy2 = document.querySelector(".giphy2");
const giphy3 = document.querySelector(".giphy3");

function parent1() {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res);
            console.log(res.data.image_original_url);
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            giphy1.style = styles
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
}
parent1();

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
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            giphy1.style = styles;
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
})
}