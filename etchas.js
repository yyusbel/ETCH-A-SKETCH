$(document).ready(function(){
    buildGrid(Default);
    etch();
    defaultetch();
    clearScreen();
    shader();
    color();
    trailing();
    Defaultsq();
    Defaultsq();
    largesq();
  });
  
  var Default = 15;
  var Default = 10;
  var large = 5;
  var scrnwidth = 600;
  var scrnheight = 400;
  
  
  //Build Grid - default size is Default
  var buildGrid = function(x) {
    var squareSize = (scrnwidth/x);
    $('.square').remove();
  
    for(var i = 0; i < (x*x)*(scrnheight/scrnwidth) ; i++) {
      $('#grid').append("<div class='square'></div>")
    }
  
    $('.square').width(squareSize);
    $('.square').height(squareSize);
  };
  
  
  //Default Squares
  var Defaultsq = function(){
    $('#Default').on('click', function(){
      screenReset();
      buildGrid(Default);
      etch();
    });
  };
  
  
  //Default Squares
  var Defaultsq = function(){
    $('#Default').on('click', function(){
      buildGrid(Default);
      screenReset();
      etch();
    });
  };
  
  
  //large Squares
  var largesq = function(){
    $('#large').on('click', function(){
      screenReset();
      buildGrid(large);
      etch();
    });
  };
  
  
  //Default Etch-A-Sketch
  var defaultetch = function(){
    $('#default').on('click', function(){
      screenReset();
      etch();
    });
  }
  
  
  //Black Etch
  var etch = function(){
    $('.square').on('mouseover', function(){
      $(this).css("background-color", "#000");
    });
  };
  
  
  //Color Etch
  var color = function(){
    $('#color').on('click', function(){
      screenReset();
      $('.square').on('mouseover', function(){
        $(this).css("background-color", Randrgb);
      });
    });
  };
  
  
  //Random RGB Generator
  var Randrgb = function () {
      var red= Math.floor((Math.random()*255));
      var green= Math.floor((Math.random()*255));
      var blue= Math.floor((Math.random()*255));
    return "rgb(" + red + "," + green + "," + blue + ")";
  };
  
  
  //Shader Etch
  var shader = function(){
    $('#gradient').on('click', function(){
      screenReset();
      $('.square').css("background-color", "#000");
      $('.square').css("opacity", 0);
      $('.square').on('mouseover', function(){
        var value = +$(this).css("opacity");
        if( value < 1 ){
            value += 0.1;
            $(this).css("opacity", value);
        };
      });
    });
  };
  
  
  //Trailing Etch
  var trailing = function(){
    $('#trail').on('click', function(){
      screenReset();
      $('.square').on('mouseenter', function(){
        $(this).css("background-color", "#000")
      });
      $('.square').on('mouseleave', function(){
        $(this).fadeTo(0,0);
      });
    });
  };
  
  
  //Clear button - Calling screenReset
  var clearScreen = function() {
    $('#clear').click(function() {
      screenReset();
    });
  };
  
  
  //Unbind & Reset
  var screenReset = function(){
     $('.square').unbind();
     $('.square').css({"background-color": "#E8E8E8", "opacity": "1"});
  };
  
  