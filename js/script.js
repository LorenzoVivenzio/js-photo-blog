const rowElem = document.querySelector(".row");
const alertElem = document.querySelector(".alert-background")
const closeBtn = document.querySelector(".close")
const progressBar = document.querySelector(".progress-bar")
const loadElem = document.querySelector(".load")
const loadingText = document.querySelector("h3")

// loading
let progress = 0;
let intervalId;

intervalId = setInterval(function () {
    if (progress === 100) {
        clearInterval(intervalId);
        loadElem.classList.add("d-none") //barra di caricamento
        loadingText.classList.add("d-none") //testo del caricamento
        axios
            .get("https://lanciweb.github.io/demo/api/pictures/")
            .then(function (resp) {
                const postsApi = resp.data;

                // ciclo forEach
                postsApi.forEach(function (post) {
                    const { title, url, date } = post; //destructure

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

                        // console.log('card clicked');

                        const card = event.target.closest('.card');

                        // console.log(card.dataset);

                        //  stamp dell'overlay
                        alertElem.classList.remove("d-none");

                        const alertOpen = document.createElement("div")
                        alertElem.classList.add("opacity-bg")
                        alertOpen.classList.add("alert-background")
                        alertOpen.innerHTML = `             
                           <div class="alert-image">
                             <img src="${url}" alt="">
                           </div>`

                        alertElem.appendChild(alertOpen)
                    })
                    // fine evento 

                    // button chiusura delle immagini
                    closeBtn.addEventListener("click", function (event) {
                        alertElem.classList.add("d-none")
                    })
                })

            })

    } else {
        progress++;
        progressBar.style.width = progress + "%";
        progressBar.innerHTML = progress;
    }

}, 100);





