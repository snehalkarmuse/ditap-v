
/**
 * Created by Nitin on 02/07/2015.
 */
$(document).ready(function(){
     //mouse enter grab varibles and add html and overlay class. fde in the title and description
$("ul#gallery li").on("mouseenter",function(){
    var imageName;
    var title=$(this).children().data("title");
    var desc=$(this).children().data("desc");
    var alt=$("#gallery img").attr("alt");
    if(alt==1) {
        imageName = $("#gallery img").attr("src");
        alert(imageName);
        }
    else{
        imageName = $("#gallery img").attr("src");
    }
    if(title == null){
        title="";
    }
    if(desc== null){
        desc="";
    }
    $(this).append("<div class='overlay'></div>");
    var overlay=$(this).children(".overlay");
    overlay.html("<h3>"+title+"</h3><p>"+imageName+"</p><p>"+desc+"</p>");
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