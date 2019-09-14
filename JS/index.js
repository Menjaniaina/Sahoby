$(document).ready(function(){
  var Project = $('#Project').html();
  var About = $('#About').html();
  var Contact = $('#Contact').html();

  $('.Project').on('click',function(){
    $(".col-md-9").html(Project);
  })
  $('.About').on('click',function(){
    $(".col-md-9").html(About);
  })
  $('.Contact').on('click',function(){
    $(".col-md-9").html(Contact);
  })
})
