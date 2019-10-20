window.onload = function() {

const giphy1 = document.querySelector(".giphy1");
const giphy2 = document.querySelector(".giphy2");
const giphy3 = document.querySelector(".giphy3");

class Fetch {
    constructor(giphys, api_key, url) {
        this.giphys = [giphy1, giphy2, giphy3];
        this.api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
        this.url = "https://api.giphy.com/v1/gifs/random?api_key="+api_key+"&tag=&rating=G";
    }

    fetchGiphy() {

    }
}
function fetcher(giphy1, giphy2, giphy3) {
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
}