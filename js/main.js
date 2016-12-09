$('.addbtn').click(function(){
  var v = $('input').val();
  console.log(v);
  $('.addls').append('<li>'+v+'</li>');
});
