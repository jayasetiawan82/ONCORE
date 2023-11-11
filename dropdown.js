// using selector inside the element

const summaryTerm = document.querySelectorAll(".summary-wrapper");

summaryTerm.forEach(function (summarySelected) {
  const btn = summarySelected.querySelector(".term-btn");

  btn.addEventListener("click", function () {
    summaryTerm.forEach(function (item) {
      if (item !== summarySelected) {
        item.classList.remove("show-details");
      }
    });
    summarySelected.classList.toggle("show-details")
  });
});


// ***** other way by traversing the DOM ********//

// const btns = document.querySelectorAll(".term-btn")

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const term = e.currentTarget.parentElement.parentElement
        
//         console.log(term)
//         term.classList.toggle("show-details")
//     })
// })