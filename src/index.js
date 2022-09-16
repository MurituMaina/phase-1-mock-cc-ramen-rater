// write your code here
window.addEventListener('DOMContentLoaded', imagesLoader)
const display = document.getElementById('ramen-menu')

function imagesLoader(){
    fetch('http://localhost:3000/ramens')
    .then((resp) => resp.json())
    .then((data =>{
        data.forEach(valueImageDisplay)
        // console.log(data)
    }))
}

const valueImageDisplay = (datum)=>{
    const out = document.createElement('img');
    out.src = `${datum.image}`
    out.alt =`${datum.name}`
    out.id = `${datum.id}`
display.append(out)
out.addEventListener('click', detailer)

}
const restaraunt = event.target[""]

for(let i = 0; i< id; i++){
    display[i].addEventListener('click', clickers)
function clickers(){
    // valueImageDisplay(datum);
    fetch('http://localhost:3000/ramens/id')
    .then((response) => response.json())
    .then((data) =>{
    data.forEach(detailer)
    
})
}

}

function detailer(data){
    console.log(data.srcElement)
    console.log(data)
    // alert("Hooray!!!")
    // <!-- <img class="detail-image" src="" alt="" />
    // <h2 class="name"></h2>
    // <h3 class="restaurant"></h3>
const detailed = document.getElementById('ramen-detail')
    const image = document.createElement('img')
    image.classList ='detail-image';
    // image.innerHTML = `${data.srcElement}`
    image.innerHTML = `data.srcElement.src`
    image.src = `${data.srcElement.src}`
    image.alt = `${data.srcElement.alt}`
    detailed.append(image)
    const name = document.getElementsByClassName('name');
    name.innerHTML =`${data.srcElement.alt}`
    // const restaurant = document.getElementsByClassName('restaurant');
    // restaurant.innerHTML = `${datum.restaurant}`
    // const rating = document.getElementById('rating-display')
    // rating.innerText = `${datum.rating}`
    // const comment = document.getElementById('comment-display');
    // comment.innerText = `${datum.comment}`
}
