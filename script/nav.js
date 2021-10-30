// menu functions

    $("#nav-toggler").click(function(){
        $('.navbar-show').removeClass('d-none')
        $('.navbar-show').animate({width: 350 })         
    })

    $('#close').click(function(){
          $('.navbar-show').animate({width: 0})
        //   $('.navbar-show').addClass('d-none')
    })

    $('.nav-link').click(function(){
          $('.navbar-show').animate({width: 0})
          
    })

// scroll functions
var mynav = document.getElementById('top-navbar')
window.onscroll = function(){

    // $('.navbar-show').animate({width: 0})
    var Top = $(window).scrollTop()
    
    if(Top >=50){
        mynav.classList.add('fixed-top')
    }
    else if(Top <= 49){
        mynav.classList.remove('fixed-top')
    }
}

// timer functions

const start = new Date('October 29,2021 00:00:00')
const end   = new Date('November 15,2021 01:00:00')

const offTime = end.getTime() - start.getTime()

console.log(offTime)



