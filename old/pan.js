var panId = $('.pan').attr('id');
var panVolume;

//volume measured in cups

var ImperialPan = {
    i1: ["Round 6 x 2 inches", 4],
    i2: ["Round 8 x 1.5 inches", 4],
    i3: ["Round 8 x 2 inches", 6],
    i4: ["Round 9 x 1.5 inches", 6],
    i5: ["Round 9 x 2 inches", 8],
    i6: ["Round 10 x 2 inches", 11],
    i7: ["Springform 9 x 2.5 inches", 10],
    i8: ["Springform 9 x 3 inches", 12],
    i9: ["Springform 10 x 2.5 inches", 12],
    i10: ["Bundt 7.5 x 3 inches", 6],
    i11: ["Bundt 9 x 3 inches", 9],
    i12: ["Bundt 10 x 3.5 inches", 12],
    i13: ["Tube 8 x 3 inches", 9],
    i14: ["Tube 9 x 3 inches", 12],
    i15: ["Tube 10 x 4 inches", 16],
    i16: ["Square 8 x 8 x 1.5 inches", 6],
    i17: ["Square 8 x 8 x 2 inches", 8],
    i18: ["Square 9 x 9 x 1.5 inches", 8],
    i19: ["Square 9 x 9 x 2 inches", 10],
    i20: ["Square 10 x 10 x 2 inches", 12],
    i21: ["Rectangular 11 x 7 x 2 inches", 6],
    i22: ["Rectangular 13 x 9 x 2 inches", 14],
    i23: ["Jelly Roll 10.5 x 15.5 x 1", 10],
    i24: ["Jelly Roll 12.5 x 17.5 x 11", 2],
    i25: ["Loaf 8 x 4 x 2.5 inches", 4],
    i26: ["Loaf 8.5 x 4.5 x 2.5", 6],
    i27: ["Loaf 9 x 5 x 3 inches", 8],
    i28: ["Muffin 1.75 x .75 inches", .125],
    i29: ["Muffin 2.75 x 1.125 inches", .25],
    i30: ["Muffin 2.75 x 1.5 inches", .5],
    i31: ["Muffin 3 x 1.25 inches", .625],
    i32: ["Heart 8 x 2.5 inches", 8]
};

//volume measured in liters
//var MetricPan = {
//    m1: ["Round 15 x 5 cm", .948],
//    m2: ["Round 20 x 4 cm", .948],
//    m3: ["Round 20 x 5 cm", 1.4],
//    m4: ["Round 23 x 4 cm", 1.4],
//    m5: ["Round 23 x 5 cm", 1.9],
//    m6: ["Round 25 x 5 cm", 2.6],
//    m7: ["Springform 23 x 6 cm", 2.4],
//    m8: ["Springform 23 x 8 cm", 2.8],
//    m9: ["Springform 25 x 6 cm", 2.8],
//    m10: ["Bundt 19 x 8 cm", 1.4],
//    m11: ["Bundt 23 x 8 cm", 2.1],
//    m12: ["Bundt 25 x 9 cm", 2.8],
//    m13: ["Tube 20 x 8 cm", 2.1],
//    m14: ["Tube 23 x 8 cm", 2.8],
//    m15: ["Tube 25 x 10 cm", 3.8],
//    m16: ["Square 20 x 20 x 4 cm", 1.4],
//    m17: ["Square 20 x 20 x 5 cm", 1.9],
//    m18: ["Square 23 x 23 x 4 cm", 1.9],
//    m19: ["Square 23 x 23 x 5 cm", 2.4],
//    m20: ["Square 25 x 25 x 5 cm", 2.8],
//    m21: ["Rectangular 28 x 18 x 5 cm", 1.4],
//    m22: ["Rectangular 33 x 23 x 5 cm", 3.3],
//    m23: ["Jelly Roll 27 x 39 x 2.5  cm", 2.4],
//    m24: ["Jelly Roll 32 x 44 x 2.5 cm", 2.8],
//    m25: ["Loaf 20 x 10 x 6 cm", .948],
//    m26: ["Loaf 21 x 11 x 6 cm", 1.4],
//    m27: ["Loaf 23 x 13 x 8 cm", 1.9],
//    m28: ["Muffin 4.5 x 2 cm", .030],
//    m29: ["Muffin 7 x 3 cm", .060],
//    m30: ["Muffin 7 x 4 cm", .120],
//    m31: ["Muffin 8 x 3 cm", .150],
//    m32: ["Heart 20 x 6 cm", 1.9]
//};

function getKey() {
    if (panId.charAt(0) === "i") {
        for (var key in ImperialPan) {
            if(ImperialPan.hasOwnProperty(key) && (key === panId)){
                panVolume = ImperialPan[key][1];
            }
        }
    } else if (panId.charAt(0) === "m") {
        for(var key in MetricPan) {
            if(MetricPan.hasOwnProperty(key) && (key === panId)){
                panVolume = MetricPan[key][1];
            }
        }
    } else {
        alert("false")
    }
    
    
    alert(ImperialPan.i32[1]);
}

$("#compare").click(function(){
    getKey();
    alert(panVolume);
    //alert(panId.charAt(0));
});