$(document).ready(function(){
  window.dancers = [];

  // *** Refactor to remove duplication

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node 

     matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage. 
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction =  window[dancerMakerFunctionName];
    // make a dancer with a random position
    // needed new keyword when instantiating 
    var dancer = new dancerMakerFunction(
      $("#container").height() * Math.random(),
      $("#container").width() * Math.random(),
      Math.random()*1000
    );
    window.dancers.push(dancer);
    $("#container").append(dancer.$node);
  });

  $(".addSlugDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction =  window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("#container").height() * Math.random(),
      $("#container").width() * Math.random(),
      Math.random()*1000
    );
    window.dancers.push(dancer);
    $('#container').append(dancer.$node);
  });
  
  $(".addPurpleDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction =  window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("#container").height() * Math.random(),
      $("#container").width() * Math.random(),
      Math.random()*2000
    );
    window.dancers.push(dancer);
    $('#container').append(dancer.$node);
  });

  $(".lineUp").on("click", function(event){
    window.dancers.forEach(function(e){ e.lineUp(); })
  });

  $(".addMovingDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction =  window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("#container").height()-100,
      $("#container").width()-100,
      Math.random()*100
    );
    window.dancers.push(dancer);
    $("#container").append(dancer.$node);
  });

  // for(var i =0; i<2; i++){
  //   // $('.addDancerButton').trigger("click");
  // }

});
