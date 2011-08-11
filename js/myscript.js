 $(document).ready(function(){
    	$("a#fnc").fancybox({
				'transitionIn'	: 'none',
				'transitionOut'	: 'none'	
			});

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
    //$('.clslg').click(function(){
       //$('.loginwr,.lgbox').remove();
     ///  return false; 
   // });
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
      
      
//main script 
var checkboxHeight = "25";
var radioHeight = "27";
var selectWidth = "152";
document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
		for(a = 0; a < inputs.length; a++) {
			if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
				span[a] = document.createElement("span");
				span[a].className = inputs[a].type;

				if(inputs[a].checked == true) {
					if(inputs[a].type == "checkbox") {
						position = "0 -" + (checkboxHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					} else {
						position = "0 -" + (radioHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					}
				}
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				inputs[a].onchange = Custom.clear;
				if(!inputs[a].getAttribute("disabled")) {
					span[a].onmousedown = Custom.pushed;
					span[a].onmouseup = Custom.check;
				} else {
					span[a].className = span[a].className += " disabled";
				}
			}
		}
		inputs = document.getElementsByTagName("select");
		for(a = 0; a < inputs.length; a++) {
			if(inputs[a].className == "styled") {
				option = inputs[a].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}
				span[a] = document.createElement("span");
				span[a].className = "select";
				span[a].id = "select" + inputs[a].name;
				span[a].appendChild(textnode);
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				if(!inputs[a].getAttribute("disabled")) {
					inputs[a].onchange = Custom.choose;
				} else {
					inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
				}
			}
		}
		document.onmouseup = Custom.clear;
	},
	pushed: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
		} else if(element.checked == true && element.type == "radio") {
			this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
		} else if(element.checked != true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		}
	},
	check: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 0";
			element.checked = false;
		} else {
			if(element.type == "checkbox") {
				this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else {
				this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
				group = this.nextSibling.name;
				inputs = document.getElementsByTagName("input");
				for(a = 0; a < inputs.length; a++) {
					if(inputs[a].name == group && inputs[a] != this.nextSibling) {
						inputs[a].previousSibling.style.backgroundPosition = "0 0";
					}
				}
			}
			element.checked = true;
		}
	},
	clear: function() {
		inputs = document.getElementsByTagName("input");
		for(var b = 0; b < inputs.length; b++) {
			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			}
		}
	},
	choose: function() {
		option = this.getElementsByTagName("option");
		for(d = 0; d < option.length; d++) {
			if(option[d].selected == true) {
				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
			}
		}
	}
}
window.onload = Custom.init;
   //remmove later from cart count
        function proverka(input) { 
        var value = input.value; 
        var rep = /[-\.;":'/a-zA-Zа-яА-Я ]/; 
        if (rep.test(value)) { 
            value = value.replace(rep, ''); 
            input.value = value; 
        }
        }
