// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  $(".saveBtn").click(function () {
    console.log(this);
    console.log($(this).siblings(".description"));
    console.log($(this).siblings(".description").val());
    console.log($(this).parent().attr("id"));
    
    
    const userinput = $(this).siblings(".description").val()
    const containerid = $(this).parent().attr("id")
    localStorage.setItem(containerid, userinput)
  })
  
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"))
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"))
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"))
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"))

  const currentHour = new Date().past("display-time");
  

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
    }
  
    
  
  
  
    
  

 



    
    
    
    
    
    
    
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
   
   
   
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
  
   
   
   
   
   
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });