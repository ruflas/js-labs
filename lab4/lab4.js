$(document).ready(function () {
    const buttons = [
      {
        label: "Descendant selector: color Name cells",
        action: () => $('#data-table tbody td.cell').toggleClass('modified')
      },
      {
        label: "Children selector: highlight header",
        action: () => $('#data-table thead').children().toggleClass('modified')
      },
      {
        label: "Adjacent selector: fade age next to Alice",
        action: () => $('td:contains("Alice") + td').fadeToggle()
      },
      {
        label: "Attr = value: Bold teacher row",
        action: () => $('td[data-person="teacher"]').parent().toggleClass('modified')
      },
      {
        label: "Attr starts with: Yellow background",
        action: () => $('td[data-person^="a"]').toggleClass('modified')
      },
      {
        label: "Attr ends with: Italic admin",
        action: () => $('td[data-person$="n"]').toggleClass('modified')
      },
      {
        label: "Attr contains: Highlight student",
        action: () => $('td[data-person*="stud"]').toggleClass('modified')
      },
      {
        label: "Even rows filter",
        action: () => $('#data-table tbody tr:even').toggleClass('modified')
      },
      {
        label: "Odd rows filter",
        action: () => $('#data-table tbody tr:odd').toggleClass('modified')
      },
      {
        label: "Classed table even rows",
        action: () => $('table.fancy-table tbody tr:even').toggleClass('modified')
      },
      {
        label: "First & last elements",
        action: () => {
          $('#data-table tbody td:first').toggleClass('modified');
          $('#data-table tbody td:last').toggleClass('modified');
        }
      },
      {
        label: "Elements not matching .note",
        action: () => $('#data-table td:not(.note)').toggleClass('modified')
      },
      {
        label: "Elements containing selector",
        action: () => $('#data-table td:has(.note)').toggleClass('modified')
      },
      {
        label: "Text contains 'curious'",
        action: () => $('#data-table td:contains("curious")').toggleClass('modified')
      },
      {
        label: "Slide hidden row",
        action: () => $('#data-table tr:hidden').slideToggle()
      }
    ];
  
    buttons.forEach((btn, i) => {
      const button = $(`<button>${i + 1}. ${btn.label}</button>`);
      button.on('click', function () {
        btn.action();
        $(this).toggleClass('toggled');
      });
      $('#buttons').append(button);
    });
  });
  