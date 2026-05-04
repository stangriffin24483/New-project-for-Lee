import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const meds = {
  amoxicillin: 10,   // mg/kg
  carprofen: 4,
  enrofloxacin: 5,
  metronidazole: 10,
  prednisone: 0.5,
  doxycycline: 5,
  cephalexin: 20,
  gabapentin: 10,
  tramadol: 2,
  famotidine: 0.5,
  maropitant: 1
};

const freq = {
  amoxicillin: '2-3',
  carprofen: '1-2',
  enrofloxacin: '1-2',
  metronidazole: '2',
  prednisone: '1-2',
  doxycycline: '1-2',
  cephalexin: '2',
  gabapentin: '2-3',
  tramadol: '2-3',
  famotidine: '2',
  maropitant: '1'
};

const translations = {
  en: {
    title: 'Aliyahs VetDose',
    weightLabel: 'Weight:',
    placeholder: 'Enter weight',
    medicationLabel: 'Medication:',
    calculate: 'Calculate',
    dose: 'Dose:',
    frequency: 'Administer {times} times daily.',
    consult: 'Consult a veterinarian for accurate dosing.',
    invalidWeight: 'Please enter a valid weight.',
    smallWarning: '⚠️ Very small patient—double check dose!',
    largeWarning: '⚠️ Large patient—confirm dosage range.',
    amoxicillin: 'Amoxicillin',
    carprofen: 'Carprofen',
    enrofloxacin: 'Enrofloxacin',
    metronidazole: 'Metronidazole',
    prednisone: 'Prednisone',
    doxycycline: 'Doxycycline',
    cephalexin: 'Cephalexin',
    gabapentin: 'Gabapentin',
    tramadol: 'Tramadol',
    famotidine: 'Famotidine',
    maropitant: 'Maropitant',
    historyTitle: 'Recent Calculations:',
    languageLabel: 'Language:'
  },
  es: {
    title: 'Aliyahs VetDose',
    weightLabel: 'Peso:',
    placeholder: 'Ingrese peso',
    medicationLabel: 'Medicamento:',
    calculate: 'Calcular',
    dose: 'Dosis:',
    frequency: 'Administrar {times} veces al día.',
    consult: 'Consulte a un veterinario para dosificación precisa.',
    invalidWeight: 'Por favor ingrese un peso válido.',
    smallWarning: '⚠️ Paciente muy pequeño—verifique la dosis!',
    largeWarning: '⚠️ Paciente grande—confirme el rango de dosis.',
    amoxicillin: 'Amoxicilina',
    carprofen: 'Carprofeno',
    enrofloxacin: 'Enrofloxacina',
    metronidazole: 'Metronidazol',
    prednisone: 'Prednisona',
    doxycycline: 'Doxiciclina',
    cephalexin: 'Cefalexina',
    gabapentin: 'Gabapentina',
    tramadol: 'Tramadol',
    famotidine: 'Famotidina',
    maropitant: 'Maropitant',
    historyTitle: 'Cálculos recientes:',
    languageLabel: 'Idioma:'
  }
};

export default function App() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [med, setMed] = useState('amoxicillin');
  const [result, setResult] = useState('');
  const [warning, setWarning] = useState('');
  const [history, setHistory] = useState([]);
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  const calculateDose = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      Alert.alert(t.calculate, t.invalidWeight);
      return;
    }

    let weightKg = weightNum;
    if (unit === 'lbs') {
      weightKg = weightNum / 2.205;
    }

    const doseMg = meds[med] * weightKg;
    const resultText = `${t.dose} ${doseMg.toFixed(2)} mg. ${t.frequency.replace('{times}', freq[med])}`;
    setResult(resultText);

    let warn = '';
    if (weightKg < 1) warn = t.smallWarning;
    if (weightKg > 80) warn = t.largeWarning;
    setWarning(warn);

    const newHistory = [{ med, dose: doseMg, weight: weightNum, unit }, ...history.slice(0, 4)];
    setHistory(newHistory);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{t.title}</Text>
        <View style={styles.langRow}>
          <Text style={styles.langLabel}>{t.languageLabel}</Text>
          <Picker
            selectedValue={lang}
            style={styles.langPicker}
            onValueChange={(value) => setLang(value)}
          >
            <Picker.Item label="EN" value="en" />
            <Picker.Item label="ES" value="es" />
          </Picker>
        </View>
      </View>

      <Text style={styles.label}>{t.weightLabel}</Text>
      <TextInput
        style={styles.input}
        placeholder={t.placeholder}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Picker
        selectedValue={unit}
        style={styles.picker}
        onValueChange={setUnit}
      >
        <Picker.Item label="kg" value="kg" />
        <Picker.Item label="lbs" value="lbs" />
      </Picker>

      <Text style={styles.label}>{t.medicationLabel}</Text>
      <Picker
        selectedValue={med}
        style={styles.picker}
        onValueChange={setMed}
      >
        <Picker.Item label={t.amoxicillin} value="amoxicillin" />
        <Picker.Item label={t.carprofen} value="carprofen" />
        <Picker.Item label={t.enrofloxacin} value="enrofloxacin" />
        <Picker.Item label={t.metronidazole} value="metronidazole" />
        <Picker.Item label={t.prednisone} value="prednisone" />
        <Picker.Item label={t.doxycycline} value="doxycycline" />
        <Picker.Item label={t.cephalexin} value="cephalexin" />
        <Picker.Item label={t.gabapentin} value="gabapentin" />
        <Picker.Item label={t.tramadol} value="tramadol" />
        <Picker.Item label={t.famotidine} value="famotidine" />
        <Picker.Item label={t.maropitant} value="maropitant" />
      </Picker>

      <Button title={t.calculate} onPress={calculateDose} />

      <Text style={styles.result}>{result}</Text>
      <Text style={styles.warning}>{warning}</Text>
      <Text style={styles.note}>{t.consult}</Text>

      {history.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>{t.historyTitle}</Text>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {translations[lang][item.med]}: {item.dose.toFixed(2)} mg ({item.weight} {item.unit})
            </Text>
          ))}
        </View>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langLabel: {
    marginRight: 10,
  },
  langPicker: {
    height: 50,
    width: 100,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  warning: {
    color: 'red',
    marginBottom: 10,
  },
  note: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  historyContainer: {
    width: '100%',
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});
