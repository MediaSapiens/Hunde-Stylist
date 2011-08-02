 $(document).ready(function(){
                
	$("#cart").click(function(){
		$(".fullorder").slideToggle('1400');
		$(this).toggleClass("active"); return false;
	});
    $(".amount a.cls").click(function(){
                        $(this).parents(".listprod").remove();
                          
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