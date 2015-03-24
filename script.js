//set initial variables
var i = 0;
var order = [ ];
//set up function f to change block colors
function f(){                           
  $(this).toggleClass("changeBackground");
    //as we click on a block, it's id is added to an array
    //called 'order'
    j = $(this).attr('id');
    order.push(j);
    i++;                                            
    //once all 7 blocks are colored blue, do the following
    if (i == 7) {
      //turn off responses to clicks
      $('.square').off('click',f);
      //turn the small square red           
      $('.smallsquare').toggleClass("changeSmallBackground");
      //turn all blue squares white
      //in reverse click order
      //with 1 second delay between them
      $.each(order.reverse(), function(index, val) {
        setTimeout(function() {
          $("#" + val).removeClass("changeBackground");
          }, 1000*(index+1));
        //turn the small square green
        setTimeout(function() { 
          $('.smallsquare').removeClass("changeSmallBackground");
          }, 7000);
          //reset initial values
        i = 0;
        order = [];
    });
    //turn on responses to clicks
    setTimeout(function() {
      $('.square').on('click',f);}, 7000);
    };
  };
//call the function f 
$('.square').on('click',f);