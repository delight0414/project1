window.addEventListener("DOMContentLoaded", function(){
    let video=document.getElementById("main_video");
    video.addEventListener("loadeddata", function(){
        main_video.play();
        //console.log("loaded");   
    });
    video.addEventListener("ended", function(){
        main_video.play(); 
        //console.log("ended");   
    });
});

$(function(){
const swiper = new Swiper("#section03 .sec03_swiper", {
    loop:true,
    autoplay: 
        {delay: 3000},
    slidesPerView: 1.5, // 450 미만
    spaceBetween: 20,
    centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
    },
    breakpoints: {
        450: { // 990 미만 450 이상 
            slidesPerView: 1.5,
        },
        991: { // 991 이상
            slidesPerView: 3
        }
    }
});
$("a.prev").click(function(e){
    e.preventDefault();
    swiper.slidePrev();
});
$("a.next").click(function(e){
    e.preventDefault();
    swiper.slideNext();
});
let=wint=0;
    $(window).scroll(function(){
        wint=$(window).scrollTop();
        if(wint > 50){
            if($("header").hasClass("fixed") === false) {
                $("header").addClass("fixed");        
            }
        }
        else{
            if($("header").hasClass("fixed") === true) {
                $("header").removeClass("fixed");        
            }
        }
    });
    ///////
    $("header").hover(
		function(){
            if(headerFlag === false) {
                $("header").addClass("active");        
            }
		},
		function(){
            if(headerFlag === false) {
                $("header").removeClass("active");        
            }         
		}
	);
    //////
let totalLi=$("#gnb > ul > li").length;

	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");

		if($(this).parent().index() === 0){
			$("header").addClass("active");
		}
	});

	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");

		if($(this).parent().parent().index() === (totalLi-1)){
			$("header").removeClass("active");
		}
	});
let headerFlag=false;

    $("#tab.open").click(function(e){
    e.preventDefault();
    console.log(headerFlag);
    if($("#tab").hasClass("open")) {
        headerFlag=true;
        $("body").addClass("fixed");
        $("header").addClass("active");
        $("#mobile").slideDown(300);
        $(this).removeAttr("class");
        $(this).addClass("close");
    }
    else {
        headerFlag=false;
        $("body").removeClass("fixed");
        $("header").removeClass("active");
        $("#mobile").slideUp(300);
        $(this).removeAttr("class");
        $(this).addClass("open");   
    }
        //console.log(headerFlag);
    });
    $("#mobile > ul > li").click(function(e){
        e.preventDefault();
        if($(this).find("ul").css("display") === "none") {       
            $("#mobile ul ul").slideUp(300);
            $(this).find("ul").slideDown(300);
            $("#mobile > ul > li").removeClass("on");
            $(this).addClass("on");
        }
        else{
            $(this).find("ul").slideUp(300);
            $(this).removeClass("on");    
        }
    });
    let winw;
	$(window).resize(function(){
		winw=$(window).width();
		if(winw > 1020){
			if($("#tab").hasClass("close") === true){
				$("body").removeClass("fixed");
				$("header").removeClass("active");
				$("#mobile").hide(300);
                $("#tab").removeAttr("class");
				$("#tab").addClass("open");
			}
		}
	});
});