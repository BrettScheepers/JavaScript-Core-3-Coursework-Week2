function createCall(api) {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML =  `<img src="${data.img}" alt="">`
        })
}

createCall("https://xkcd.now.sh/?comic=latest")