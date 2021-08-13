var body = document.querySelector("body");
var shareSection = document.querySelector(".share_section");
var shareButton = document.querySelector(".share_button");
var shareIcon = document.querySelector(".share_icon");
var activeState = document.querySelector(".active_state");

shareButton.addEventListener("click", function(){
  activeState.classList.add("visible");
  body.addEventListener("click", function(e) {
    if(!shareSection.contains(e.target)){
      activeState.classList.remove("visible");
    }
  })
});
