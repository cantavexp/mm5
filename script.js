
$(function () {
   
  $(".saveBtn").click(function () {
    console.log(this);
    console.log($(this).siblings(".description"));
    console.log($(this).siblings(".description").val());
    console.log($(this).parent().attr("id"));
    
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
  });



    const userinput = $(this).siblings(".description").val()
    const containerid = $(this).parent().attr("id")
    localStorage.setItem(containerid, userinput)
  })

$('.notification').addClass('show');
  
setTimeout(function () {
  $('.notification').removeClass('show');
}, 5000);



  hourTracker();
  setInterval(hourTracker, 15000);
  
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"))
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"))
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"))
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"))
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"))
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"))
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"))
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"))
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"))

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
 

  

  const timeBlocks = document.getElementsByClassName('time-block');
  for (let i = 0; i < timeBlocks.length; i++){
    const timeBlock = timeBlocks[i];
    const hour = parseInt(timeBlock.id.split('-'))[1];

    if (hour < currentHour) {

      timeBlock.getElementsByClassName.add('past');
      
      
    } else if (hour === currentHour) {
      timeBlock.getElementsByClassName.add('present');
        
    }  else {
          timeBlock.getElementsByClassName.add('future');
        }
  }
 
