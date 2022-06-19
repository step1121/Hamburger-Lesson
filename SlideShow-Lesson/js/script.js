$(function(){
  $("#back a").on("click",function(event){
   $("body, html").animete({
     scrollTop:0
   }, 800);
   event.preventDefault();
  });
});