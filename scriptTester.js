window.onload = function() {

class Fetch {
    constructor() {
        this.giphys = document.querySelectorAll(".slider");
        this.api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
        this.url = "https://api.giphy.com/v1/gifs/random?api_key="+this.api_key+"&tag=&rating=G";
    }

    fetchGiphys() {
        for (let i = 0; this.giphys.length < 3; i++) {
            fetch(this.url)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    console.log("Success!", res);
                    console.log(res.data.image_original_url);
                    const imgUrl = res.data.image_original_url;
                    const styles = "background-image: url("+imgUrl+");";
                    this.giphys[i].style = styles
                })
                .catch(err => {
                    console.log("Something went wrong...", err)
                })
        }
    }
}
Fetch = new Fetch;

Fetch.fetchGiphys();
}