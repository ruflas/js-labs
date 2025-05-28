$(document).ready(function () {
    // Panel animation
    $('#dashboard').hover(
      function () {
        $(this).stop().animate(
          {
            left: '0',
            backgroundColor: 'rgb(255,255,255)'
          },
          500,
          'easeInSine'
        );
      },
      function () {
        $(this).stop().animate(
          {
            left: '-92px',
            backgroundColor: 'rgb(110,138,195)'
          },
          1500,
          'easeOutBounce'
        );
      }
    );
  
    // Image hover replacement
    $('#dashboard img').each(function () {
      let imgFile = $(this).attr('src');
      let preloadImage = new Image();
      let imgExt = /(\.\w{3,4})$/;
  
      preloadImage.src = imgFile.replace(imgExt, '_h$1');
  
      $(this).hover(
        function () {
          $(this).attr('src', preloadImage.src);
        },
        function () {
          $(this).attr('src', imgFile);
        }
      );
    });
  
    // FancyBox init (auto by data-fancybox)
  });
  