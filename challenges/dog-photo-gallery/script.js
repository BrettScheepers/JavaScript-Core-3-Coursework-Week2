let btn = document.querySelector('#addImg')
let imageList = document.querySelector('#imgList')

btn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            imageList.innerHTML += `<li><img src="${data.message}" alt=""></li>`
        })
        .catch(error => console.log(error))
})