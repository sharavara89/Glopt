// Hamburger and toggle menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__items'),
          menuItem = document.querySelectorAll('.menu__item'),
          hamburger = document.querySelector('.menu__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu__hamburger_active');
        menu.classList.toggle('menu__items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu__hamburger_active');
            menu.classList.toggle('menu__items_active');
        });
    });
});

//Slick slider

$(document).ready(function () {
    $('.reviews__slider').slick({
		centerMode: true,
		centerPadding: '60px',
		variableWidth: true,
		slidesToShow: 3,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
                    arrows: false,
                    dots: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
        	},
        ]
    });

//Masked phone input

    $('input[name=phone]').mask("+7 (999) 999-9999");
    
//Validation Plugin
	
	function validateForms(form) {
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                text: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Ведите минимум {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Адрес должен быть в формате example@domain.com"
                },
                text: {
                    required: "Пожалуйста, введите свое сообщение",
                    minlength: jQuery.validator.format("Ведите минимум {0} символов!")
                }
            }
        });
    }

    validateForms('#consultation__form');
    validateForms('#questions__form');
    validateForms('#callback__form');

//Mailer PHP

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

//Close and open modal windows, and thanks window

    $('[data-modal=callback]').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });
    $('.callback__close').on('click', function() {
        $('.overlay, #callback, #thanks').fadeOut('fast');
    });

//Fixed header

    $(window).scroll(function () {
        if($(this).scrollTop() > 93)  {
            if($('header').hasClass('header_fixed')){}
            else {
                $('.header').fadeOut(0).addClass('header_fixed').fadeIn();
            }
        }
        else {
            $('.header').removeClass('header_fixed', 300);
        }
    });

//Smooth-scroll

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200
    });

//Wow.js

    new WOW().init();
});