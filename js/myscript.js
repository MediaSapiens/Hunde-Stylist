 $(document).ready(function(){
    //inner zoom

    //placeholder script
jQuery('input[placeholder], textarea[placeholder]').placeholder();
    //remmove later from cart count
         $(".monprod").keypress(function( b ){
                var C = /[0-9\x25\x24\x23]/;
                var a = b.which;
                var c = String.fromCharCode(a);
                return !!(a==0||a==8||a==9||a==13||c.match(C));
            });
        $('.selectBlock').sSelect();
    //slider script           

             $('.thmsld:first').addClass('active');
                $(".thmsld a").click(function(){
                     		 $('.slider').find('.active').removeClass('active');
                             $(this).parents('.thmsld').addClass('active'); 
                             return false;
                     	});
                         $('.nextsld').click(function(){
                             $('.active').next('.thmsld').addClass('active');
                             $('.active').prev('.thmsld').removeClass('active'); 
                             $('.active a').click();
                         });         
                          $('.prvsld').click(function(){
                                       $('.active').prev('.thmsld').addClass('active');
                                       $('.active').next('.thmsld').removeClass('active');
                                        $('.active a').click(); 
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
        total=total+6.90;
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
        calculate();
        return false;
    });
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
    //forogot password
    $('.frgt,.clslgf').click(function(){
        $('.frgpsd').animate({'height': 'toggle'},'300');
        return false;
    });
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
    $('.nav ul li.hlsb').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1033px -226px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });
    $('.nav ul li.rgns').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1025px -330px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });
    $('.nav ul li.trans').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1034px -434px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });
    $('.nav ul li.hund').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1018px -538px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });
    $('.nav ul li.bekl').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1029px -642px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });
    $('.nav ul li.hals').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1031px -746px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });
      $('.nav ul li.hund').mouseenter(function(){
        $(this).css('background','url(img/sprite2.png) -1025px -850px');
        
    }).mouseleave(function (){
        $(this).css('background','none');
    });  
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
     var sum=0;
       function count() {           
            $('.monprod').each(function(){
              sum = sum +parseInt($(this).val());
              $('#cart span').html(sum);
            })
            }
            $('.monprod').change(function(){ 
              sum=0;
              count();
            })  
            $(count)
    $(".amount a.cls").click(function(){
                        $(this).parents(".listprod").remove();
                       sum=0;
                       count();    
                        return false;
                    });
      $('.ttl').click(function(){
        $(this).next().next().animate({'height': 'toggle'},'slov');
            });
      });