var searchPatientsButton = document.querySelector('#search-patients')

searchPatientsButton.addEventListener('click', function () {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
  xhr.addEventListener('load', function () {
    var response = xhr.responseText;
    console.log(response)
    console.log(typeof response)

    var patients = JSON.parse(response)
    patients.forEach(function(patient) {
      addPatientaAtTable(patient)
    })
  })
  xhr.send()
})
