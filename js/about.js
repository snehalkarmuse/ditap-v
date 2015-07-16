
/**
 * Created by Nitin on 02/07/2015.
 */
$(document).ready(function(){
     //mouse enter grab varibles and add html and overlay class. fde in the title and description
$("ul#gallery li").on("mouseenter",function(){
    var title=$(this).children().data("title");
    var desc=$(this).children().data("desc");
    if(title == null){
        title="";
    }
    if(desc== null){
        desc="";
    }
    $(this).append("<div class='overlay'></div>");
    var overlay=$(this).children(".overlay");
    overlay.html("<h3>"+title+"</h3><p>"+desc+"</p>");
    overlay.fadeIn(800);
    $(".gridLeft").css("opacity",".2");
});

$("ul#gallery li").on("mouseleave",function() {
    $(this).append("<div class='overlay'></div>");
    var overlay=$(this).children(".overlay");
    overlay.fadeOut(500);
    $(".gridLeft").css("opacity","1");
});
})