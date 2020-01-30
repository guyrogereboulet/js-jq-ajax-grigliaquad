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

  $.ajax(
     {
       "url" : "https://flynn.boolean.careers/exercises/api/random/int",
       "method" : "GET",
       "success" : function(risposta) {
         console.log(risposta.response);
       },
       "error" : function() {
           alert("Errore");
       }
     }
  )

});
