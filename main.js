// Whole-script strict mode syntax
'use strict';

$(function() {
    
    var cr=true,fr=true,sr=true,dr = true,ar = true;
    //Filter all the NaN values form the table
    //Sort The Numbers
    function removeNon(arr){
        var newArray = arr.filter(function (value) {
            return !Number.isNaN(value);
        });
        return newArray;
    }
    
    //compare two array values
    function arrayContainsArray (superset, subset) {
        return subset.every(function (value) {
          return (superset.indexOf(value) >= 0);
        });
    }
    
    function checkAll(finval){
        if (arrayContainsArray(finval,allCorners) && cr == true){
            cr = false;
            alert("All corners");
        }
        if (arrayContainsArray(finval,rowNum1) && fr == true){
            fr = false;
            alert("First row");
        }
        if (arrayContainsArray(finval,rowNum2) && sr == true){
            sr = false;
            alert("Second row");
        }
        if (arrayContainsArray(finval,rowNum3) && dr == true){
            dr = false;
            alert("Third row");
        }
        if (arrayContainsArray(finval,tableArray) && ar == true){
            ar = false;
            alert("Full House");
        }
    }

    //Get the Corner numbers
    function cornerFinder(arr){
        var cArray = removeNon(arr);
        var tempCorner = [];
        tempCorner.push(cArray[0]);
        tempCorner.push(cArray[cArray.length-1]);
        return tempCorner;
    }

    //Get all the values from the table.
    var tableNum = [];
    $('#ticket tr td').each(function() {
        //convert values to integer and push in the new object.
        tableNum.push(parseInt($(this).text()));
    });
    var tableArray = removeNon(tableNum); 
    //console.log(tableArray);

    //Get all the values from the first row.
    var rowTemp1 = [];
    $('#ticket tr:first td').map(function() {
        //convert values to integer and push in the new object.
        rowTemp1.push(parseInt($(this).text()));
    });
    var firstCorner = cornerFinder(rowTemp1);
    var rowNum1 = removeNon(rowTemp1);
    //console.log(firstCorner);
    //console.log(rowNum1);

    //Get all the values from the second row.
     var rowTemp2 = [];
     $('#ticket tr:nth-child(2) td').map(function() {
         //convert values to integer and push in the new object.
         rowTemp2.push(parseInt($(this).text()));
     });
     var rowNum2 = removeNon(rowTemp2);
     //console.log(rowNum2);

     //Get all the values from the second row.
     var rowTemp3 = [];
     $('#ticket tr:last-child td').map(function() {
         //convert values to integer and push in the new object.
         rowTemp3.push(parseInt($(this).text()));
     });
     var secondCorner = cornerFinder(rowTemp3);
     var rowNum3 = removeNon(rowTemp3);
     //console.log(secondCorner);
     //console.log(rowNum3);

     //Merge corner arrays
     var allCorners = $.merge( $.merge( [], firstCorner ), secondCorner );
     //console.log(allCorners);

    // Click cell to get the values and push the values in the array.
    var clickArray = [];
    $('#ticket').find('td').click(function(){
        var v = $(this).html();
        var x = parseInt($(this).html());
        if( $.trim(v) != '0' && v != ''){
            if (clickArray.indexOf(x) === -1){
                clickArray.push(parseInt(v));
            } else{
                var re1 = clickArray.indexOf(x);
                clickArray.splice(re1,1);
            }
            $(this).toggleClass('activeCell');
        }
        //console.log(allCorners);
        if (clickArray.length > 3) {
            checkAll(clickArray);
        }
     });

});