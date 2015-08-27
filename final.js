var lines = {};
var hold = [];
var amounts = [];
var n = $("li");
var ii = n.length

var test;
var convertPanel = $('.convert').hide();

//$('#panel').click( function() {
//    var counter = 0;
//    if (counter === 0) {
//        convertPanel.slideDown();
//        counter = 1;
//    } else if (counter === 1) {
//        convertPanel.slideUp().hide();
//        counter = 0;
//    }
//});

$('#panel').click( function() {
    if (convertPanel.is(':hidden')) {
        convertPanel.slideDown();
    } else {
        convertPanel.slideUp().hide();
    }
});

//getting original values
$( document ).ready(function() {
    for (var i = 0; i < ii; i++) {
        hold[i] = $(n[i]).text().split(" ");
    }
});

//handle radial buttons
$('#formA').find("[value='round']").click( function () {
    $("#formA .variable").empty().append("Diameter <input type='number' name='r1'>");
});

$('#formA').find("[value='square']").click( function () {
    $("#formA .variable").empty().append("<input type='number' name='a'> x <input type='number' name='b'>");
});

$('#formB').find("[value='round']").click( function () {
    $("#formB .variable").empty().append("Diameter <input type='number' name='r2'>");
});

$('#formB').find("[value='square']").click( function () {
    $("#formB .variable").empty().append("<input type='number' name='x'> x <input type='number' name='y'>");
});


var init = function () {

//getting pan values
    var ao = ( Number( $("[name='a']").val() ) ) * ( Number( $("[name='b']").val() ) );
    var ro = Math.pow( ( Number ( $("[name='r1']").val() ) ), 2) * (0.785);
    var an = ( Number( $("[name='x']").val() ) ) * ( Number( $("[name='y']").val() ) );
    var rn = Math.pow( ( Number ( $("[name='r2']").val() ) ), 2) * (0.785);
    
    var res
    
//calculate res
    if ( isNaN(ro) ) {
        if( isNaN(rn) ) {
            res = ( an / ao );
        } else if (isNaN(an)) {
            res = ( rn / ao );
        }
    } else if ( isNaN(ao) ) {
        if( isNaN(rn) ) {
            res = ( an / ro );
        } else if (isNaN(an)) {
            res = ( rn / ro );
        }
    };

//collect ingredients
    for (var i = 0; i < ii; i++) {
        lines[i] = $(n[i]).text().split(" ");
        amounts[i] = Number(hold[i][0]);
        amounts[i] = Number( (amounts[i]*res).toFixed(2) );
    }
    
//run exchange
    if ( isNaN(res) ) {
        alert("Please add pan values");
    } else if (test != res) {
        for (var i = 0; i < ii; i++) {
            lines[i][0] = amounts[i];
            $(n[i]).text(function () {
                return lines[i].join(' ');
            });
            
        }
    }
    
    test = res;
};

//run on button click
$("#run").click(function () {
    init();
});