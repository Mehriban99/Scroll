var mybtn = document.getElementById("myBtn")

window.onscroll = function() {
    scrolling()
};

function scrolling() {
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        mybtn.style.display = "block";
    }
    else{
        mybtn.style.display = "none";
    }
}

function myFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(function(){
    $(window).on("scroll",function(){
        if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            $(".header").addClass("active")
        }
        else{
            $(".header").removeClass("active")
        }
    })
})