 $(document).ready(function(){
              var helina = $('.fullorder').outerHeight();
                          var b =helina-25;
               $('.fullorder').css('marginTop',-b);
               $('#cart').click(function(){  
                 if($(this).hasClass('clicked')){                 
                        $('.fullorder').animate({marginTop:-b},1500);
                        $('#cart a').css('backgroundPosition','0 0');
                        $('#cart').removeClass('clicked');                                          
                 }
                 else{   
                       $('.fullorder').animate({marginTop:0},1500);
                       $('#cart a').css('backgroundPosition','0 -258px');
                       $('#cart').addClass('clicked');
                   }
                   return false;
                 });
                  $("tr a.cls").click(function(){
                        $(this).parents("tr").remove();
                          
                        return false;
                    });
                 

                $('.info').click(function(){
                 
                    if($(this).hasClass('now'))
                    {
                          $(this).animate({marginTop:0},800);                          
                          $(this).removeClass('now');  
                    }
                    else 
                    {
                         $(this).animate({marginTop:-117},800);              
                        $(this).addClass('now')                       
                    }           
                 });          
             
							
								 

      }); 