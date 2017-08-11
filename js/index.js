var swiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        //autoplay:3000,
        //speed:300

});
var maxheight = 0;
for(var i = 0;i<$("#model1 .model-list  p").length;i++){
    if(maxheight <= $("#model1 .model-list  p").eq(i).height()){
        maxheight = $("#model1 .model-list  p").eq(i).height();
    }
}
$("#model1 .model-list  p").css('height',parseInt(maxheight)+'px');

var maxheight1 = 0;
for(var i = 0;i<$("#model2 .model-list  p").length;i++){
    if(maxheight1 <= $("#model2 .model-list  p").eq(i).height()){
        maxheight1 = $("#model2 .model-list  p").eq(i).height();
    }
}
$("#model2 .model-list  p").css('height',parseInt(maxheight1)+'px');


//$(".cooperation>ul li").hover(function(){
//    clearInterval(t);
//},function(){
//    var t=setInterval("tab()",3000);
//});


var mdi=$("#cooperation-md>ul li").index();
var mdt=setInterval("mdtab()",3000);
function mdtab(){
    mdi++;
    if(mdi>2){
        mdi=0;
    }
    $("#cooperation-md>ul li").eq(mdi).addClass("active").siblings(".active").removeClass("active");

    $(" #cooperation-md>div").eq(mdi).addClass("active").siblings(".active").removeClass("active");
}




var smalli=$("#cooperation-small>ul li").index();

var smallt=setInterval("smalltab()",3000);
function smalltab(){
    smalli++;
    if(smalli>2){
        smalli=0;
    }
    //console.log(smalli);
    $("#cooperation-small>ul li").eq(smalli).addClass("active").siblings(".active").removeClass("active");

    $(" #cooperation-small>div").eq(smalli).addClass("active").siblings(".active").removeClass("active");
}

$("#cooperationCase-md>ul>li").click(function(event){
    event.preventDefault();
    $(this).addClass("active").siblings(".active").removeClass("active");
    //console.log($(this).index());
    $("#cooperationCase-md>div>div").eq($(this).index()).addClass("active").siblings(".active").removeClass("active");
})

$(function() {
    $(".submenu").hide();
    $(" .link").click(function(){
        $(".submenu").slideUp();
        $(this).next().slideDown();
        $(this).parent().addClass("open").siblings(".open").removeClass("open");
    })
    new WOW().init();
});

