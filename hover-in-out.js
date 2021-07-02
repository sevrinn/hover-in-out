$(document).ready(function(){
  console.log('Oh fuck yea, i\'m so READY!')
  $('img').hover(function(){
    $(this).attr('src', $(this).attr('data-alt-src'));
  }, function(){
    $(this).attr('src', $(this).attr('data-og-src'))
  });
});