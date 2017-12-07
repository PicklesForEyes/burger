$(document).ready(() => {

  $('.btn-default').on('click', function(e) {
    e.preventDefault();
    let id = $(this).val();

    $.ajax({
      url: `/api/burgers/${id}`,
      method: 'PUT',
      data: {
        devoured: 1
      },
      success: result => {
        location.reload();
      }
    })
  })

  $('.btn-danger').on('click', function(e) {
    e.preventDefault();
    let id = $(this).val();

    $.ajax({
      url: `/api/burgers/${id}`,
      method: 'DELETE',
      success: (result => {
        location.reload()
      })
    })
  })

  $('#submit-burger').on('click', (e) => {
    e.preventDefault();
    let burgerName = $('#burger-name-input').val().trim();

    if(burgerName) {
      $.ajax({
        url: '/api/burgers',
        method: 'POST',
        data: {
          burger_name: burgerName
        },
        success: result => {
          location.reload()
        }
      })
    }

    $('#burger-name-input').val('')
  })
})