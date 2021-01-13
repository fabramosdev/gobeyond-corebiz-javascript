document.addEventListener("DOMContentLoaded", function(){
   var btnDecrement = document.getElementById('btn-decrement')
   var btnIncrement = document.getElementById('btn-increment')   
   var amount = document.getElementById('valor')

   var counter = 0

   function decrementValue() {
       if (counter > 0){
           counter --
           amount.innerHTML = counter
       } else {
           amount.innerHTML = 0
           alert('Somente números positivos')           
       }
   }

   function incrementValue() {
       counter++
       amount.innerHTML = counter
   }

   btnDecrement.addEventListener('click', decrementValue)
   btnIncrement.addEventListener('click', incrementValue)
})