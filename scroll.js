// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

const date = document.getElementById("date")

date.innerHTML = new Date().getFullYear()

const navBar = document.getElementById("nav")

window.addEventListener("scroll", function(){
    const scrollHeight = this.window.scrollY
    const navHeight = navBar.getBoundingClientRect().height
    
    if(scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav")
    } else {
        navBar.classList.remove("fixed-nav")
    }



    console.log(navHeight)
})