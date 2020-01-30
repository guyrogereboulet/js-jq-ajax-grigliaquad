// Esercizio

// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// I quadrati fateli prima a mano e poi con javascript.

$(document).ready(function() {

  // $("column") click(function(){
  //  $(this)
  //
  //
  // });
  var cinque = 5;
  $.ajax(
     {
       "url" : "https://flynn.boolean.careers/exercises/api/random/int",
       "method" : "GET",
       "success" : function(risposta) {
          var result = risposta.response;
         console.log(result);
         if (result > cinque) {

           console.log("verde");
           $(".risultato").parent().addClass("green").append(result);
         }
         else {
           console.log("giallo");
           $(".risultato").parent().addClass("yellow").append(result);
         }

       },
       "error" : function() {
           alert("Errore");
       }
     }
  )

});


// function stampaNumero (numero) {
//   console.log(numero);
// }
