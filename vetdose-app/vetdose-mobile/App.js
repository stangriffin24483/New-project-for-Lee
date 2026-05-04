import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
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

export default function App() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [med, setMed] = useState('amoxicillin');
  const [result, setResult] = useState('');
  const [warning, setWarning] = useState('');

  const calculateDose = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum) {
      Alert.alert('Error', 'Enter weight');
      return;
    }

    let weightKg = weightNum;
    if (unit === 'lbs') {
      weightKg = weightNum / 2.205;
    }

    const doseMg = weightKg * meds[med];
    setResult(`Dose: ${doseMg.toFixed(2)} mg. Administer ${freq[med]} times daily.`);

    let warn = '';
    if (weightKg < 1) warn = '⚠️ Very small patient—double check dose!';
    if (weightKg > 80) warn = '⚠️ Large patient—confirm dosage range.';
    setWarning(warn);

    // TODO: save history with AsyncStorage
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 Aliyahs VetDose</Text>

      <Text>Weight:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight"
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

      <Text>Medication:</Text>
      <Picker
        selectedValue={med}
        style={styles.picker}
        onValueChange={setMed}
      >
        <Picker.Item label="Amoxicillin" value="amoxicillin" />
        <Picker.Item label="Carprofen" value="carprofen" />
        <Picker.Item label="Enrofloxacin" value="enrofloxacin" />
        <Picker.Item label="Metronidazole" value="metronidazole" />
        <Picker.Item label="Prednisone" value="prednisone" />
        <Picker.Item label="Doxycycline" value="doxycycline" />
        <Picker.Item label="Cephalexin" value="cephalexin" />
        <Picker.Item label="Gabapentin" value="gabapentin" />
        <Picker.Item label="Tramadol" value="tramadol" />
        <Picker.Item label="Famotidine" value="famotidine" />
        <Picker.Item label="Maropitant" value="maropitant" />
      </Picker>

      <Button title="Calculate" onPress={calculateDose} />

      <Text style={styles.result}>{result}</Text>
      <Text style={styles.warning}>{warning}</Text>
      <Text style={styles.note}>Consult a veterinarian for accurate dosing.</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  warning: {
    color: 'red',
    marginTop: 10,
  },
  note: {
    marginTop: 20,
    fontStyle: 'italic',
  },
});
