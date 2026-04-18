const meds = {
  amoxicillin: 10,   // mg/kg
  carprofen: 4,
  enrofloxacin: 5
};

const translations = {
  en: {
    title: 'VetDose',
    weightLabel: 'Weight:',
    placeholder: 'Enter weight',
    medicationLabel: 'Medication:',
    calculate: 'Calculate',
    dose: 'Dose:',
    consult: 'Consult a veterinarian for accurate dosing.',
    invalidWeight: 'Please enter a valid weight.',
    smallWarning: '⚠️ Very small patient—double check dose!',
    largeWarning: '⚠️ Large patient—confirm dosage range.',
    amoxicillin: 'Amoxicillin',
    carprofen: 'Carprofen',
    enrofloxacin: 'Enrofloxacin'
  },
  es: {
    title: 'VetDose',
    weightLabel: 'Peso:',
    placeholder: 'Ingrese peso',
    medicationLabel: 'Medicamento:',
    calculate: 'Calcular',
    dose: 'Dosis:',
    consult: 'Consulte a un veterinario para dosificación precisa.',
    invalidWeight: 'Por favor ingrese un peso válido.',
    smallWarning: '⚠️ Paciente muy pequeño—verifique la dosis!',
    largeWarning: '⚠️ Paciente grande—confirme el rango de dosis.',
    amoxicillin: 'Amoxicilina',
    carprofen: 'Carprofeno',
    enrofloxacin: 'Enrofloxacina'
  }
};

let currentLang = 'en';

function changeLang(lang) {
  currentLang = lang;
  updateUI();
}

function updateUI() {
  const t = translations[currentLang];
  document.getElementById('title').textContent = t.title;
  document.getElementById('weightLabel').textContent = t.weightLabel;
  document.getElementById('weight').placeholder = t.placeholder;
  document.getElementById('medLabel').textContent = t.medicationLabel;
  document.getElementById('calcBtn').textContent = t.calculate;

  // Update med options
  const medSelect = document.getElementById('med');
  medSelect.options[0].text = t.amoxicillin;
  medSelect.options[1].text = t.carprofen;
  medSelect.options[2].text = t.enrofloxacin;
}

function calculateDose() {
  const weight = parseFloat(document.getElementById('weight').value);
  const unit = document.getElementById('unit').value;
  const med = document.getElementById('med').value;
  const result = document.getElementById('result');
  const warning = document.getElementById('warning');

  if (isNaN(weight) || weight <= 0) {
    warning.textContent = translations[currentLang].invalidWeight;
    result.textContent = '';
    return;
  }

  let weightKg = weight;
  if (unit === 'lbs') {
    weightKg = weight * 0.453592;
  }

  const doseMg = meds[med] * weightKg;

  result.textContent = `${translations[currentLang].dose} ${doseMg.toFixed(2)} mg`;

  let warn = '';
  if (weightKg < 1) warn = translations[currentLang].smallWarning;
  if (weightKg > 80) warn = translations[currentLang].largeWarning;

  warning.textContent = warn || translations[currentLang].consult;

  saveHistory(med, doseMg);
}

function saveHistory(med, dose) {
  let history = JSON.parse(localStorage.getItem('history')) || [];
  history.unshift({ med, dose, lang: currentLang });
  if (history.length > 5) history.pop();
  localStorage.setItem('history', JSON.stringify(history));
}

// Initialize
updateUI();