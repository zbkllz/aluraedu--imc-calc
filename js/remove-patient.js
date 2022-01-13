var table = document.querySelector('#tabela-pacientes')

table.addEventListener('dblclick', function (event) {
  event.target.parentNode.classList.add('fadeOut')

  // {
  //   event.target.parentNode.remove()
  // }

  setTimeout(function () {
    if (event.target.tagName == 'td') {
      event.target.parentNode.remove()
    }
  }, 500)
})
