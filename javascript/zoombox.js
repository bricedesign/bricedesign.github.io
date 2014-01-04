var $zoombox = $('div#zoombox'); // the zoombox
var $imgholder = $zoombox.children('img.holder'); // the replaceable image

// when the zoombox close link is clicked…
$zoombox.click(function() {
  // fade the zoombox out of view:
  close();
});

// display the zoombox
function open() {
  $zoombox.removeClass('closed').addClass('open');
};

// hide the zoombox
function close() {
  $zoombox.removeClass('open').addClass('closed');
};

// find the image's new dimensions and adjust its margins to center it
function recenter() {
  // calculate half the image width and height
  // store the negatives of these numbers as variables
  var xOffset = $imgholder.width() * -0.5;
  var yOffset = $imgholder.height() * -0.5;
  
  // compose CSS value strings with 'px' units
  // store these strings as variables
  var xMargin = xOffset.toString() + 'px';
  var yMargin = yOffset.toString() + 'px';
  
  // adjust the image's margins to center it
  $imgholder.css('margin-left', xMargin);
  $imgholder.css('margin-top', yMargin);
};

$imgholder.load(recenter);

// when an image link with a class of 'zoombox' is clicked… 
$('a.zoombox').click(function() {
  // reset the zoom image to invisbible
  $imgholder.attr('src', '/images/invisible-dot.png'); 
  
  // get the href of the clicked link and store it in the variable zoomURL:
  var zoomURL = $(this).attr('href');
  
  // load the new zoomed image into the zoombox by changing the the src of the img element to zoomURL:
  $imgholder.attr('src', zoomURL);
  
  // fade the zoombox into view:
  open();
  
  // prevent the clicked link's default HTTP request:
  return false;
});