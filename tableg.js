// Whole-script strict mode syntax
'use strict';

$(function() {
    var baseArray = []; 
    var randomNum = 0;
    var requiredNum = 15;
    var low = 1;
    var high = 100;
    //Random 15 number generator function
        while(requiredNum > 0 ){
            var numrandom = Math.floor(Math.random() * 99) + 1;
            if(baseArray.indexOf(numrandom) == -1){
                baseArray.push(numrandom);
                requiredNum--;
            }
        }   
    //document.write("random array =>", baseArray + "==>" + baseArray.length);
    
    
    
    var tablehtm = "<table id='ticket'><tbody>";

    function gettable(smallA){
            tablehtm += '<tr>';
                for(var j = 0 ; j < 9 ; j++){
                    if (smallA[j] == "y"){
                        tablehtm += '<td></td>';
                    } else {
                    tablehtm += '<td>' + smallA[j] + '</td>';
                    }
                }
            tablehtm += '</tr>';
    }

    function breakBase(unshuffled){
        unshuffled.push("y","y","y","y");
        let shuffled = unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        return shuffled;
    }

    while (baseArray.length > 0) {
        var cold = breakBase(baseArray.splice(0,5));
        gettable(cold);
    }

    tablehtm += '</tbody></table>';
    $(tablehtm).appendTo('#div1');
});