var title = document.querySelector('.title')
title.textContent = 'Bananinha Nutrissimy'

var patients = document.querySelectorAll('.patient')

function imcCalc(peso, altura) {
  var imc = 0

  imc = peso / (altura * altura)

  return imc.toFixed(2)
}

function weightValidate(peso) {
  if (peso > 0 && peso < 1000) {
    return true
  } else {
    return false
  }
}

function heightValidate(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true
  } else {
    return false
  }
}

for (var i = 0; i < patients.length; i++) {
  var patient = patients[i]

  var tdPeso = patient.querySelector('.info-peso')
  var peso = tdPeso.textContent

  var tdAltura = patient.querySelector('.info-altura')
  var altura = tdAltura.textContent

  var tdImc = patient.querySelector('.info-imc')

  var pesoValido = weightValidate(peso)
  var alturaValida = heightValidate(altura)

  if (!weightValidate) {
    console.log('Peso inválido!')
    pesoValido = false
    tdImc.textContent = 'Peso inválido'
    patient.classList.add('paciente-invalido')
  }

  if (!heightValidate) {
    console.log('Altura inválida!')
    alturaValida = false
    tdImc.textContent = 'Altura inválida'
    patient.classList.add('paciente-invalido')
  }

  if (alturaValida && pesoValido) {
    var imc = imcCalc(peso, altura)
    tdImc.textContent = imc
  }
}
