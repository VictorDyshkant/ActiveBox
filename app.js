$(function(){
    let header = $("#header");
    let intro = $("#intro");
    let nav = $('#nav');

    let scrollPos;

    $(window).on('scroll load resize',()=>
    {
        scrollPos = $(window).scrollTop();

        if(scrollPos > intro.innerHeight())
        {
            header.addClass('fixed');
        }
        else{
            header.removeClass('fixed');
        }
    });
    

    $("[data-scroll]").on("click",(event)=>{
        event.preventDefault();

        let elementId = event.currentTarget.dataset['scroll'];
        let offset = $(elementId).offset().top;

        nav.removeClass('show');
        $('html, body').animate({
            scrollTop : offset - 50
        }, 1000);
    });

    $("#burger").on("click",()=>{
        event.preventDefault();

        nav.toggleClass('show');
        console.log($("#burger"));
    });
});