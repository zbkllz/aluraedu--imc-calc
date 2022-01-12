var btnAdd = document.querySelector('#adicionar-paciente')

var tdImc = document.createElement('td')

btnAdd.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  var patient = getPatientData(form)
  var patientTr = createTr(patient)

  var fatalError = patientValidate(patient)

  if (fatalError.length > 0) {
    var errorMsg = document.querySelector("#error-message");
    errorMsg.textContent = fatalError;
    return;
  }

  <li></li>

  var table = document.querySelector('#tabela-pacientes')

  table.appendChild(patientTr)

  form.reset()
})

function showErrorMessage(fatalError) {
  var ul = document.querySelector('#error-message')
  fatalError.forEach(function (fatalError){
    var li = document.createElement('li')
    li.textContent = fatalError;
    ul.appendChild(li)
  })
}

function createTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function patientValidate(patient) {
  var fatalError = [];

  if (!weightValidate(patient.peso)) {
    return ""
  } else {
    fatalError.push("Peso inválido")
  }

  if (!heightValidate(patient.altura)) {
    return ""
  } else {
    fatalError.push("Altura inválida")
  }

  return fatalError;
}

function createTr(patient) {
  var patientTr = document.createElement('tr')
  patientTr.classList.add('patient')

  patientTr.appendChild(createTd(patient.nome, 'info-nome'))
  patientTr.appendChild(createTd(patient.peso, 'info-peso'))
  patientTr.appendChild(createTd(patient.altura, 'info-altura'))
  patientTr.appendChild(createTd(patient.gordura, 'info-gorduraTd'))
  patientTr.appendChild(createTd(patient.imc, 'info-imc'))

  return patientTr
}

tdImc.textContent = imcCalc(peso, altura)

function getPatientData(form) {
  var patient = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: imcCalc(form.peso.value, form.altura.value)
  }
  return patient
}
