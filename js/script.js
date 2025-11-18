const container = document.querySelector(".container");
const cardElem = document.querySelector(".card");
const postImg = document.querySelector(".post-image")
const dateELem = document.querySelector(".date");
const descrElem = document.querySelector(".descrition");
const rowElem = document.querySelector(".row");
// console.log(container, cardElem, postImg, dateELem, descrElem)

axios
.get("https://lanciweb.github.io/demo/api/pictures/")
.then(function(resp){
    
    const postsApi = resp.data;


    postsApi.forEach(function(post){

        const {title, url, date} = post;

        const printPosts = document.createElement("div")
        printPosts.classList.add("col")
        printPosts.innerHTML =
        `<div class="card">
            <div class="pin-img">
                <img src="./img/pin.svg" alt="">
            </div>
            <div class="post-image">
                <img src="${url}" alt="">
            </div>
            <div class="date text-gray">
                ${date}
            </div>
            <div class="descrition text-family">${title}</div>
        </div>`

        rowElem.appendChild(printPosts)
        console.log(printPosts)
                
    })
    
})
