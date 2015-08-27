var lines = {};
var amounts = [];

var init = function () {
    var n = $("li");
    
	for (var i = 0, ii = n.length; i < ii; i++) {
        lines[i] = $(n[i]).text().split(" ");
        amounts[i] = Number(lines[i][0]);

    };
    
    alert(amounts);
    
    
//    $("li").each(function(index, element){
//        lines[index] = $(element).text();
//    });
//
//    alert(lines[0]);
};

$("#run").click(function () {
    init();
});