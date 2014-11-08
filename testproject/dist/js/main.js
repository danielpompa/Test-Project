$(document).ready(function(){        
            $('.img-responsive').on('click',function(){
                var src = $(this).attr('src');
				var id = $(this).attr('id');
				id = id.split("newsimage");
               
				var index = parseInt(id[1]);  	

			   var html = '<img src="' + src + '" class="img-responsive"/>';
				html += '<div style="height:25px;clear:both;display:block;">';
                html += '<a class="controls next" href="'+ (index+1) + '">next &raquo;</a>';
                html += '<a class="controls previous" href="' + (index-1) + '">&laquo; prev</a>';
                html += '</div>';
				
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(html);
					
					var total = $('.img-responsive').length;
					
					 var newPrevIndex = parseInt(id[1]); 
					 var newNextIndex = parseInt(total) - 1; 
					
					//hide next button
					if(index === newNextIndex){
						$('a.next').hide();
					}          
					//hide previous button
					if(newPrevIndex === 1){
						$('a.previous').hide();
					}
                })
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
                
           });
        
})  


$(document).on('click', 'a.controls', function(){
            var index = parseInt($(this).attr('href'));
			var src = $('#newsimage'+index).attr('src');             
            
            $('.modal-body img').attr('src', src);
            
			var newPrevIndex = index - 1; 
            var newNextIndex = index + 1; 
            
			if($(this).hasClass('previous')){               
                $(this).attr('href', newPrevIndex); 
                $('a.next').attr('href', newNextIndex);
            }else{
                $(this).attr('href', newNextIndex); 
                $('a.previous').attr('href', newPrevIndex);
            }
			
			var total = $('.img-responsive').length;
			
			newNextIndex = total-1;
						
			//hide next button
            if(index === newNextIndex){
                $('a.next').hide();
            }else{
                $('a.next').show()
            }            
            //hide previous button
            if(newPrevIndex === 0){
                $('a.previous').hide();
            }else{
                $('a.previous').show()
            }
            
            return false;
        });
