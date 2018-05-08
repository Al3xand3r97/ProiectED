
// BINARY TO...

function binToOct() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 2).toString(8);
    $("#result").val(digit);
   
}

function binToDec() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 2);
    $("#result").val(digit);
}

function binToHex() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 2).toString(16).toUpperCase();
    $("#result").val(digit);
}

// OCTAL TO...

function octToBin() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 8).toString(2);
    $("#result").val(digit);
}

function octToDec() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 8).toString(10);
    $("#result").val(digit);
}

function octToHex() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 8).toString(16).toUpperCase();
    $("#result").val(digit);
}

// DECIMAL TO...

function decToBin() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 10).toString(2);
    $("#result").val(digit);  
}

function decToOct() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 10).toString(8);
    $("#result").val(digit);
}

function decToHex() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 10).toString(16).toUpperCase();
    $("#result").val(digit);
}

// HEX TO...

function hexToBin() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare,16).toString(2);
    $("#result").val(digit);
}

function hexToOct() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 16).toString(8);
    $("#result").val(digit);
}

function hexToDec() {
    var valoare = document.getElementById("valoare").value;
    var digit = parseInt(valoare, 16).toString(10);
    $("#result").val(digit);
}

/*
Indexes:
Bin: 0
Oct: 1
Dec: 2
Hex: 3
*/


function converteste() {
    var valoare = document.getElementById("valoare").value;
    var selectElemFrom = document.getElementById("from");
    var selectElemTo = document.getElementById("to");
    var indexTo = selectElemTo.selectedIndex;
    var indexFrom = selectElemFrom.selectedIndex;

        if ( valoare < 0)
   alert("Please enter a number higher than 0!");

//APEL BIN TO...

   else if ( indexFrom === 0 && indexTo === 1)          
   binToOct();
   
   else if ( indexFrom === 0 && indexTo === 2)         
   binToDec();

   else if ( indexFrom === 0 && indexTo === 3)          
   binToHex();

//APEL OCT TO...

   else if ( indexFrom === 1 && indexTo === 0)
   octToBin();

   else if ( indexFrom === 1 && indexTo === 2)
   octToDec();

   else if ( indexFrom === 1 && indexTo === 3)
   octToHex();

//APEL DEC TO...

   else if ( indexFrom === 2 && indexTo === 0)              
   decToBin(); 

   else if ( indexFrom === 2 && indexTo === 1)
   decToOct();

   else if ( indexFrom === 2 && indexTo === 3)
   decToHex();

//APEL HEX TO...

   else if ( indexFrom === 3 && indexTo === 0)
   hexToBin();
  
   else if ( indexFrom === 3 && indexTo === 1)
   hexToOct();

   else if ( indexFrom === 3 && indexTo === 2)          
   hexToDec();

//ERROR

    else

    alert("Error! You really want to convert to the same base?!");

}
