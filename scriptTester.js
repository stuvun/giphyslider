window.onload = function() {

giphys = document.querySelectorAll(".slider");
buttons = document.querySelectorAll(".buttons");
api_key = "SZTkBwjQYYYVremZV8DUaaETiwKktzF2";
url = "https://api.giphy.com/v1/gifs/random?api_key="+api_key+"&tag=&rating=G";

function fetchGiphys() {
    for (let i = 0; giphys.length < 3; i++) {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log("Success!", res);
                console.log(res.data.image_original_url);
                const imgUrl = res.data.image_original_url;
                const styles = "background-image: url("+imgUrl+");";
                giphys[i].style = styles
            })
            .catch(err => {
                console.log("Something went wrong...", err)
            })
    }
}
fetchGiphys();


buttons[0].addEventListener("click", (evt) => {
    evt.preventDefault();
    function slides() {
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("Success!", res)
            console.log(res.data.image_original_url);
            const imgUrl = res.data.image_original_url;
            const styles = "background-image: url("+imgUrl+");";
            giphys[0].style = styles;
        })
        .catch(err => {
            console.log("Something went wrong...", err)
        })
    }
})
}