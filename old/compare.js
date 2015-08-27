//document.getElementById("compare").onclick = function(){
//    var a = Number($("[name='a']").val());
//    var b = Number($("[name='b']").val());
//    var x = Number($("[name='x']").val());
//    var y = Number($("[name='y']").val());
//    var res = (a * b) / (x * y);
//    alert(res);
//};

$("[value='round']").click( function () {
    $("#variable").empty().append("Diameter <input type='number' name='r1'>");
});

$("[value='square']").click( function () {
    $("#variable").empty().append("<input type='number' name='a'> x <input type='number' name='b'>");
});


$("#compare").click(function () {
    var a = Number($("[name='a']").val());
    var b = Number($("[name='b']").val());
    var x = Number($("[name='x']").val());
    var y = Number($("[name='y']").val());
    var res = (a * b) / (x * y);
    alert(res);
});

