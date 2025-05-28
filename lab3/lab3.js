$(document).ready(function () {
    // --- QUOTES CLONE + STYLE ---
    $('span.pq').each(function () {
      const quote = $(this).clone();
      quote.removeClass('pq');
      quote.addClass('pullquote');
      $(this).before(quote);
    });
  
    // --- EVENT 1: Doble click anywhere ---
    $(document).dblclick(function () {
      alert("You double-clicked the page!");
    });
  
    // --- EVENT 2: Hover links ---
    $('.main').mouseover(function () {
      const message = "<p>You hovered a link with the mouse!</p>";
      $('.main').append(message);
    });
  
    // --- EVENT 3: Change button text ---
    $('#clickMe').click(function () {
      $(this).val("I'm clicked!");
    });
  
    // --- EVENT 4: Style buttons with tracking ---
    const styles = [
      'changed-style-1',
      'changed-style-2',
      'changed-style-3',
      'changed-style-4',
      'changed-style-5'
    ];
  
    for (let i = 1; i <= 10; i++) {
      const btn = $(`<input type="button" value="Style ${i}" id="btn${i}" class="style-btn">`);
      $('#buttons-container').append(btn).append('<br><br>');
  
      btn.click(function () {
        const target = $('#ProjectX p').eq((i - 1) % 3);
        const className = styles[(i - 1) % styles.length];
        target.addClass(className);
        const tag = target.prop("tagName");
  
        $('.main').append(`<p>Button ${i} changed ${tag} with class "${className}"</p>`);
        $(this).val(`${i}. clicked`);
      });
    }
  });
  