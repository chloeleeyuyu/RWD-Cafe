$(document).ready(function(){
    $("#gotop").css({
        width: "3.5em",
        height: "3.5em",
        color: "#FFF",
        backgroundColor: "rgba(255,190,75,0.6)",
        fontWeight: "900",
        fontFamily: "sans-serif",
        textAlign: "center",
        lineHeight: "3.5em",
        borderRadius: "25%",
        zIndex: "50",
        position: "fixed",
        bottom: "1em",
        right: "1em",
        cursor: "pointer",
    });
    $("#gotop").on("click",function(){
        $("html,body").animate({
            scrollTop: 0
        },2000)
    })
    $(window).scroll(function(){
        let h = $("html,body").scrollTop();
        if(h > 1200){
            $("#gotop").fadeIn();
        }else{
            $("#gotop").fadeOut();
        }
    })
})