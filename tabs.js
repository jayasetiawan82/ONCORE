const btns = document.querySelectorAll(".tab-btn");
const menu = document.querySelector(".menu");
const articles = document.querySelectorAll(".content");

menu.addEventListener("click", function(e) {
  const id = e.target.dataset.id; //to get data set from buttons 


  //remove active class from all buttons and add to clicked button
  if (id) {
    btns.forEach(function (btn) { 
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

  // remove active class from menu and added to the clicked menu
    articles.forEach(function (menu) {
      menu.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
