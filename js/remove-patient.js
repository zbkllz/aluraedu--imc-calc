var patients = document.querySelectorAll('.patient')

patients.forEach(function (patient) {
  patient.addEventListener('dblclick', function () {
    this.remove()
  })
})
