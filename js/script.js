const container = document.querySelector(".container");
const cardElem = document.querySelector(".card");
const postImg = document.querySelector(".post-image")
const dateELem = document.querySelector(".date");
const descrElem = document.querySelector(".descrition");
const rowElem = document.querySelector(".row");
const alertElem = document.querySelector(".alert-background")
const closeBtn = document.querySelector(".close")
console.log(closeBtn)


// console.log(container, cardElem, postImg, dateELem, descrElem)

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function (resp) {

        const postsApi = resp.data;


        postsApi.forEach(function (post) {

            const { title, url, date } = post;

                        //  stampare i post 
            const printPosts = document.createElement("div")
            printPosts.classList.add("col-sm-12", "col-md-6", "col-lg-4", "pb-3")
            printPosts.innerHTML =
                `<div class="card" data-img="${url}">
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

                        // evento click
            printPosts.addEventListener("click", function (event) {

                console.log('card clicked');

                const card = event.target.closest('.card');

                console.log(card.dataset);
                
                        //  stamp dell'overlay
                alertElem.classList.remove("d-none");

                const alertOpen = document.createElement("div")
                alertOpen.classList.add("alert-background")
                alertOpen.innerHTML = `             
                    <div class="alert-image">
                        <img src="${url} " alt="">
                    </div>`

                alertElem.appendChild(alertOpen)
                
            })
            // fine evento 

            closeBtn.addEventListener("click", function(event){

                alertElem.classList.add("d-none")
            })
        })


    })
