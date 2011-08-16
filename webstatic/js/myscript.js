 $(document).ready(function(){
    	$('.selectBlock').sSelect();
    //chenge value zero 
       
    //slider script           
            $('.thmsld:first').addClass('active');
            var largePath = $('.active').children('a').attr("href");
            $('.bigpick a').attr('href',largePath);            
            $(".thmsld a").click(function(){
        		var largePath = $(this).attr("href");        		
        	    $("#largeImg").attr('src',largePath);
                $('.slider').find('.active').removeClass('active');
                $(this).parents('.thmsld').addClass('active');
                 $('.bigpick a').attr('href',largePath);  
                return false;
        	});
            $('.nextsld').click(function(){
                $('.active').next('.thmsld').addClass('active');
                $('.active').prev('.thmsld').removeClass('active');
                var largePath = $('.active').children('a').attr("href");        		
        	    $("#largeImg").attr('src',largePath);
                 $('.bigpick a').attr('href',largePath);  
            });
         
             $('.prvsld').click(function(){
                          $('.active').prev('.thmsld').addClass('active');
                          $('.active').next('.thmsld').removeClass('active');
                          var largePath = $('.active').children('a').attr("href");        		
                  	    $("#largeImg").attr('src',largePath);
                         $('.bigpick a').attr('href',largePath);  
                      });
   
                           

            
    //login page checkbox
    $('.chkl input[type=checkbox]').css('opacity','0');
    $('input:checked').parents('.chkl').css({backgroundPosition: '-1633px -754px'});
    $('.chkl').click(function(){
        if($(this).children('input:checked').length)
            {
                $(this).css('backgroundPosition',' -1633px -754px');
              
            }
        else
            {
                $(this).css('backgroundPosition','-1633px -692px');
               
            }
    });
    //backet over page
        function calculate() {
        var total = 0, sum = 0;
        $('.baskprd').each(function(){
            var price = $( this ).parent().prev().find("input").val().replace(/[,]+/g, '.');
            count = $( this ).val();
            sum += parseInt( count );
            total += parseFloat( price ) * parseInt( count );
        });
        $('.makord span.ddt').html(sum);
        $('.total .tlprct').html(total.toFixed(2));
    }

    $('.baskprd').change(function(){
        calculate();
    });

    calculate();  
    //dele product
    $('.cls').click(function(){
        $(this).parents('.wrbask').remove();
        return false;
    });
    //count product bask

    
    //acc5 page show/hide form
      $('input[name=redact]').click(function(){
                  if($('.chndpdelred:visible').length)
                    $(this).parents('.adreparam').children('input').removeAttr('disabled');
                 else
                    $(this).parents('.adreparam').children('input').attr('disabled','disabled');
                               
                $(this).parents('.adreparam').children('.chndpdelred').animate({'height': 'toggle'},'300');
            });
            $('input[name=redstnd]').click(function(){
                 if($('.chndpdelreds:visible').length)
                    $(this).parents('.wradr').children('.greacc').removeAttr('disabled');
                 else
                    $(this).parents('.wradr').children('.greacc').attr('disabled','disabled');
                    
                $(this).parents('.wradr').children('.chndpdelreds').animate({'height': 'toggle'},'300');
            });
            
      $('.frpen').click(function(){
            $(this).parents('.seporpen').children('ul').animate({'height': 'toggle'},'300');
            return false;
      });
    //show char in login block
    $('#check').change(function() {
        var $pass = $('#pass');
    
        if (!$pass.next().is('.pass-show')) {
            $('<input class="pass-show">').val($pass.val()).hide().insertAfter($pass);
        }
    
        if ($(this).is(':checked')) {
            $pass.hide().next().show();
        }
        else {
            $pass.show().next().hide();
        }
    });
    //login page script

    //forogot password
    $('.frgt,.clslgf').click(function(){
        $('.frgpsd').animate({'height': 'toggle'},'300');
        return false;
    });
    //delet "forogot pass" block

    
    //index page drop-down menu 
        $('.nav ul li').hover(
        function() {
            $(this).addClass("active");
            $(this).find('ul').stop(true, true);
            $(this).find('ul').slideDown();
            
        },
        function() {
            $(this).removeClass("active");
            $(this).find('ul').slideUp('fast');
            
        }
    );

    //style for chekbox
    $('.stlchek input[type=checkbox]').css('opacity','0');
    $('input:checked').parents('.stlchek').css({backgroundPosition: ' -1044px -1545px'});
    $('.stlchek').click(function(){
        if($(this).children('input:checked').length)
            {
                $(this).css('backgroundPosition',' -1044px -1545px');
              
            }
        else
            {
                $(this).css('backgroundPosition','-1044px -1477px');
               
            }
    });
    
    
    //page acc5 scroll to top
        $('.totop').click(function(){ 
                if($.browser.safari){
                    bodyelem = $("body")
                } else{
                    if($.browser.opera){
                        bodyelem = $("html")
                    } else{
                        bodyelem = $("html,body")
                    }
                }
                bodyelem.animate({scrollTop: 600});
                return false;
            });
        // acc5 page delete adres deliver
        $(".delivdel").click(function(){
                        $(this).parents('.adreparam').remove();
                        return false;
                    });

     //page acc3 script
        $('.delivhbox').children('.wrphd:first').css('display','block');
        $('.choisdel').children('.hdel:first').css('backgroundPosition','-807px -1051px');
        $('.hdel').click(function(){       
            if($(this).parents().children('.wrphd:hidden').length)
              $(this).css({backgroundPosition: '-807px -1051px'});
           else
           $(this).css({backgroundPosition: '-220px -1522px'});
            $(this).parents().children('.wrphd').animate({'height': 'toggle'},'300');
                });        
        $('.dldel').click(function(){
            $(this).parents('.delivhbox').remove();           
        });
     
     //dropdown page begin script         
	$("#cart").click(function(){
		$(".fullorder").slideToggle('slow');
		$(this).toggleClass("active"); return false;
	});
    //remove product from cart
    $(".amount a.cls").click(function(){
                        $(this).parents(".listprod").remove();
                        return false;
                    });

                $('.ttl').click(function(){
                 
                    if($(this).parents('.info').hasClass('now'))
                    {
                          $(this).parents('.info').animate({marginTop:0},800);                          
                          $(this).parents('.info').removeClass('now');  
                    }
                    else 
                    {
                         $(this).parents('.info').animate({marginTop:-117},800);              
                        $(this).parents('.info').addClass('now')                       
                    }           
                 });
      });
      //coutn all product in cart


       $(function() {  
            var sum=0; 
            $('.monprod').each(function(){
              sum = sum +parseInt($(this).val());
              $('#cart span').html(sum);
            })            
            $('.monprod').change(function(){
              sum = sum +parseInt($(this).val());
              $('#cart span').html(sum);
            })        
            })

   //remmove later from cart count
        function proverka(input) { 
        var value = input.value; 
        var rep = /[-\.;":'/a-zA-Zа-яА-Я ]/; 
        if (rep.test(value)) { 
            value = value.replace(rep, ''); 
            input.value = value; 
        }
        }
       
$(document).ready(function(){
$("a#fnc").fancybox({
				'transitionIn'	: 'none',
				'transitionOut'	: 'none'	
			});
});