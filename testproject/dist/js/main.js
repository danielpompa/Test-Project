$(document).ready(function(){        
            $('.img-responsive').on('click',function(){
                var src = $(this).attr('src');
				var id = $(this).attr('id');
				id = id.split("newsimage");
                var html = '<img src="' + src + '" class="img-responsive"/>';
				html += $('#newtext' + id[1]).html(); 
				
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(html);
                })
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
                
           });
        
})  