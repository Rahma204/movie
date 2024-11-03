
let movieContainer = document.querySelector(".movieContainer")
let searchInput = document.querySelector(".searchInput")
let nameInput = document.querySelector(".name")
let emailInput = document.querySelector(".email")
let passwordInput = document.querySelector(".password")
let phoneInput = document.querySelector(".phone")
let ageInput = document.querySelector(".age")

let nameRegix = /^[a-z]{3,15}$/
let emailRegix = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let phoneRegix = /^(02)?(01)[0125][0-9]{8}$/
let passwordRegix = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let ageRegix = /^(1[6-9]|[2-9][0-9]|100)$/

function validation(element,regix) {
  if ( regix.test(element.value)) {
    console.log("yes");
    
  }
}
async function nowPlaying() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data = await response.json()
    let data2 =  await data.results
    console.log(data2); 
    displayMovies(data2)    
    
}
nowPlaying()
async function popular() {
    let response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data = await response.json()
    let data2 =  await data.results
    console.log(data2); 
    displayMovies(data2)    
    
}
async function topRated() {
    let response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data = await response.json()
    let data2 =  await data.results
    console.log(data2); 
    displayMovies(data2)    
    
}
async function trending() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data = await response.json()
    let data2 =  await data.results
    console.log(data2); 
    displayMovies(data2)    
    
}
async function upComing() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data = await response.json()
    let data2 =  await data.results
    console.log(data2); 
    displayMovies(data2)    
    
}

async function search() {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data = await response.json()
    let data2 =  await data.results
    console.log(data2); 
    displayMovies(data2)
}


let imgPath = `https://image.tmdb.org/t/p/w500`

function displayMovies(array) {
movieContainer.innerHTML = ""
for (let i = 0; i < array.length; i++) {
        checkMovieImage(array,i) 
        checkMovieVote(array,i) 
        console.log(Math.floor(array[i].vote_average));
            
let content = ` <div class="col-lg-4 col-md-6 col-sm-12 ">
<div class="inner position-relative overflow-hidden fs-4">
<img src="${movieImage}" class="w-100"/>
<div class="layer position-absolute p-4 ">
<h1 class="text-white tittle animate__slideOutLeft h3 " >${array[i].title}</h1>
<p class="text-white overflow-hidden fs-6 view des ">${array[i].overview}</p>
<p class="text-white fs-6 date">Release Dte : ${array[i].release_date}</p>
<div class="icons fs-4 rate">${icons}</div>
<div class="circle rate d-flex justify-content-center align-items-center fs-5 mt-1">
    <span class="text-white">${Math.floor(array[i].vote_average)}</span>
</div>
</div>
</div>
</div>`    
movieContainer.innerHTML += content
 $(".inner").on("mouseenter",function () {
  vv()  
 }) 
}
}

function checkMovieImage(array,index)
{
if(array[index].poster_path == null && array[index].backdrop_path == null)
{
movieImage = `assets/images/default-movie.jpg`;
}
else if(array[index].poster_path == null)
{
movieImage = `${imgPath+array[index].backdrop_path}`;
}
else if(array[index].hasOwnProperty('poster_path'))
{
    movieImage = `${imgPath+array[index].poster_path}`;
}
} 



let icons = ""
function checkMovieVote(array,index) {
icons = ""
if ( Math.floor(array[index].vote_average) <= 2 ) {
icons += `<i class="fa-solid fa-star"></i>`     
}
else if ( Math.floor(array[index].vote_average) <= 3 &&  Math.floor(array[index].vote_average) > 2 ) {
icons += `<i class="fa-solid fa-star"></i>`     
}
else if ( Math.floor(array[index].vote_average) <= 4 &&  Math.floor(array[index].vote_average) > 3) {
for (let i = 0; i < 2; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
else if ( Math.floor(array[index].vote_average) <= 5 &&  Math.floor(array[index].vote_average) > 4) {
for (let i = 0; i < 2; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
else if ( Math.floor(array[index].vote_average) <= 6 &&  Math.floor(array[index].vote_average) > 5) {
for (let i = 0; i < 3; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
else if ( Math.floor(array[index].vote_average) <= 7 &&  Math.floor(array[index].vote_average) > 6) {
for (let i = 0; i < 3; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
else if ( Math.floor(array[index].vote_average) <= 8 &&  Math.floor(array[index].vote_average) > 7) {
for (let i = 0; i < 4; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
else if ( Math.floor(array[index].vote_average) <= 9 &&  Math.floor(array[index].vote_average) > 8) {
for (let i = 0; i < 4; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
else if ( Math.floor(array[index].vote_average) <= 10 &&  Math.floor(array[index].vote_average) > 9) {
for (let i = 0; i < 5; i++) {
icons += `<i class="fa-solid fa-star"></i>`  
}   
}
}


$(".open").on("click", function () {
$("aside").animate({width:"200px"},700)
$(".nav").animate({left:"200px"},700)
$(".open").css({display:"none"})
$(".close").css({display:"block"})
})
$(".close").on("click", function () {
$("aside").animate({width:"0px"},700)
$(".nav").animate({left:"0px"},700)
$(".close").css({display:"none"})
$(".open").css({display:"block"})
})   
       
 async function vv() {
        

        
    
}

        
        
$("aside a").on("click", function(){
    let scrollTopOffset= $(".contact2").offset().top
   $("html, body").animate({scrollTop:scrollTopOffset},2000)
    
})
     
        
        
        
        
        
        
        
        










