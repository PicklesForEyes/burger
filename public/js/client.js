$(document).ready(() => {



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