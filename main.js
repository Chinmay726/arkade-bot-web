// const check = document.getElementById('check');
// console.log(check.checked)

var checkBox = document.getElementById("check");
var navigation = document.querySelector(".nav");
console.log(navigation)
console.log(checkBox)
function navshow(){
  if(checkBox.checked === true){
    navigation.classList.add("checked")

  }
  if(checkBox.checked === false){
    navigation.classList.remove("checked")

  }

}