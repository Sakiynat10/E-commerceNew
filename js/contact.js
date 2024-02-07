const tabButtons = document.querySelectorAll(".btn__map");
const tabContents = document.querySelectorAll(".tab-content");
let active = 0;

function getTabContents(){
  tabContents.forEach((el ,i ) => {
    if(active !== i ){
      el.style.display = "none"
    }else{
      el.style.display = "block"
    }
  })
}

getTabContents()

tabButtons.forEach((el , i) => {
  el.addEventListener("click" , function(){
    active = i;
    getTabContents()
  })
})