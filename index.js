let pagup = document.querySelector('.page_up_icon');

pagup.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})



let menu = document.querySelector('.icon_bx');
let nav = document.querySelector('.main_menu');

menu.onclick = () =>{
    nav.classList.toggle('active'); 
};
