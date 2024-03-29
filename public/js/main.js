$(document).ready(function(){
  $(".delete_profile_image").on('click',function(e){
      if(confirm('Are you sure want to delete this image?')){
          e.preventDefault();
          $('.profile_image').val('');
          $('.profile_image_preview').attr('style','');
          $('.profile_image_section').hide();
      }
  });
  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('.profile_image_preview').attr('style', 'background-image:url('+e.target.result +')' );
          }

          reader.readAsDataURL(input.files[0]);
      }
  }

  $("#profile_image").change(function(){
    readURL(this);
  });

  
  setTimeout( function(){
      if( $('.message').find('.alert').hasClass('alert-success') ){
        $('.message').slideUp(700); 
      }
  }, 5000);

  setTimeout( function(){
      if( $('.message').find('.alert').hasClass('alert-danger') ){
        $('.password-change-btn .defult-btn').trigger('click'); 
        $('.profile-row.pass-fields').addClass('error');
      }
  }, 1000);
  
});