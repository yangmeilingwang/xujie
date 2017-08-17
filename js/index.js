var swiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:3000,
        speed:300

});



//$(".cooperation>ul li").hover(function(){
//    clearInterval(t);
//},function(){
//    var t=setInterval("tab()",3000);
//});


var mdi=$("#cooperation-md>ul li").index();
//var mdt=setInterval("mdtab()",3000);
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
    //var maxheight = 0;
    //for(var h = 0;h<$("#model1 .model-list  p").length;h++){
    //    if(maxheight <= $("#model1 .model-list  p").eq(h).height()){
    //        maxheight = $("#model1 .model-list  p").eq(h).height();
    //    }
    //}
    //$("#model1 .model-list  p").css('height',parseInt(maxheight)+'px');
    //
    //var maxheight1 = 0;
    //for(var h = 0;h<$("#model2 .model-list p").length;h++){
    //    if(maxheight1 <= $("#model2 .model-list p").eq(h).height()){
    //        maxheight1 = $("#model2 .model-list p").eq(h).height();
    //    }
    //}
    //$("#model2 .model-list p").css('height',parseInt(maxheight1)+'px');


    $(".submenu").hide();

console.log( $("#accordion li:eq(0).link"))
        $("#accordion li:eq(0) .link").next().slideDown();

    $(" .link").click(function(){
        $(".submenu").slideUp();
        if(!$(this).parent().hasClass("open")){
            $(this).next().slideDown();
            $(this).parent().addClass("open").siblings(".open").removeClass("open");
        }




    })
    new WOW().init();

    var i=0;
    var t = setInterval(function () { i++; move();},3000);
    $("#cooperationCase-md>div>ul").on("click","a",function(e){
        //var i=$(this).index();
        //var id = e.target().attr("href");
        e.preventDefault();
        var id = $(this).attr("href");//点击的li在所有li中的序号
        console.log(id);
        //console.log(i);
        $(this).parent().addClass("active").siblings(".active").removeClass("active");
        $(id).addClass("active").siblings(".active").removeClass("active");
        clearInterval(t);
        //setInterval(function(){i++;move();},3000);

    });
    /*移动事件*/
    function move() {
        $("#cooperationCase-md>div>ul>li").eq(1).addClass("active").siblings(".active").removeClass("active");
        $("#cooperationCase-md>div>div").eq(i).addClass("active").siblings(".active").removeClass("active");
        var clone = $("#cooperationCase-md>div>ul>li").first().clone();//克隆第一张图片
        $("#cooperationCase-md>div>ul").append(clone);//复制到列表最后
        $("#cooperationCase-md>div>ul>li").first().remove();
        //console.log(i);
        if(i>=8){
            i=0;
        }
    }
});

