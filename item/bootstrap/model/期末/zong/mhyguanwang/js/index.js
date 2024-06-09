var jianbian = `grayscale(0%)`;
$('.pics').on({
    "mouseover": function () {
        $(this).css("filter", jianbian);
    },
    "click": function () {
        $(this).css("filter", jianbian);
    }
});

 var spanhtml = `(双击查看场景)`;
var spanhtmls = `(点击关闭场景)`;


var dinshi =  setInterval(function () {
    var winWid = window.innerWidth;
    console.log(winWid);
    if (winWid > 768) {
        $("#mengdespan").text(`蒙德城`);
         $("#mengde").css("height", "100%");
        $("#liyuespan").text(`璃月港`);
         $("#liyue").css("height", "100%");
        $("#daoqispan").text(`稻妻城`);
         $("#daoqi").css("height", "100%");
        $("#xumispan").text(`须弥城`);
        $("#xumi").css("height", "100%");
    }
   
         
       
    if (winWid <= 768) {
        $("#mengde").css("height", "0");
        $("#liyue").css("height", "0");
        $("#daoqi").css("height", "0");
        $("#xumi").css("height", "0");   
        $("#mengdespan").text(`蒙德城${spanhtml}`);
        $("#liyuespan").text(`璃月港${spanhtml}`);
        $("#daoqispan").text(`稻妻城${spanhtml}`);
        $("#xumispan").text(`须弥城${spanhtml}`);
         let i = 0;
         $("#mengdespan").click(function () {
             if (i % 2 == 1) {
                 $("#mengde").css("height", "100%");
                 $("#mengdespan").text(`蒙德城${spanhtmls}`);
                 i++;
             }
             else {
                 $("#mengde").css("height", "0");
                 i++;
             }
         });
     
         let a = 0;
         $("#liyuespan").click(function () {
             if (a % 2 == 1) {
                 $("#liyue").css("height", "100%");
                 $("#liyuespan").text(`璃月港${spanhtmls}`);
                 a++;
             }
             else {
                 $("#liyue").css("height", "0");
                 a++;
             }
         });
     
         let b = 0;
         $("#daoqispan").click(function () {
             if (b % 2 == 1) {
                 $("#daoqi").css("height", "100%");
                 b++;
                 $("#daoqispan").text(`稻妻${spanhtmls}`);
                 $("#daoqispan").text(`稻妻城${spanhtmls}`);
             }
             else {
                 $("#daoqi").css("height", "0");
                 b++;
             }
         });
     
         let c = 0;
         $("#xumispan").click(function () {
             if (c % 2 == 1) {
                 $("#xumi").css("height", "100%");
                 c++;
                 $("#xumispan").text(`须弥${spanhtmls}`);
                 $("#xumispan").text(`须弥城${spanhtmls}`);
             }
             else {
                 $("#xumi").css("height", "0");
                 c++;
             }
         });
     }    
}, 3000); 

 
    
