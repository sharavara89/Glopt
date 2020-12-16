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
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
        	},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
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
                }
            }
        });
    }

    validateForms('#consultation__form');
    validateForms('#questions__form');
    validateForms('#callback__form');

    //Modal close and open

    $('[data-modal=callback]').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });
    $('.callback__close').on('click', function() {
        $('.overlay, #callback, #thanks').fadeOut('fast');
    });

    //Mailer PHP

    $('form').submit(function(e) {
        e.preventDefault();
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

    //Anchor, smoth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.anchor').fadeIn();
        } else {
            $('.anchor').fadeOut();
        }
    });

    $(function(){
        $("a[href=#anchor]").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });
});