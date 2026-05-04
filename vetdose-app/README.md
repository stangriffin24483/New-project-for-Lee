# VetDose

A simple web-based veterinary medication dosage calculator.

## Features

- Calculate doses for common veterinary medications
- Support for weight in kg or lbs
- Medications included:
  - Amoxicillin (10 mg/kg)
  - Carprofen (4 mg/kg)
  - Enrofloxacin (5 mg/kg)
  - Metronidazole (10 mg/kg)
  - Prednisone (0.5 mg/kg)
  - Doxycycline (5 mg/kg)
  - Cephalexin (20 mg/kg)
  - Gabapentin (10 mg/kg)
  - Tramadol (2 mg/kg)
  - Famotidine (0.5 mg/kg)
  - Maropitant (1 mg/kg)
- Safety warnings for very small or large patients
- History saving (last 5 calculations stored locally)

## Usage

1. Open `index.html` in a web browser.
2. Enter the animal's weight.
3. Select the unit (kg or lbs).
4. Choose the medication.
5. Click "Calculate" to see the recommended dose.
6. View safety warnings if applicable (e.g., for very small or large patients).

**Note:** This is for reference only. Always consult a veterinarian for accurate dosing and treatment plans. Calculations are saved locally for reference.

## Running Locally

To run the app locally:

1. Navigate to the `vetdose-app` directory.
2. Start a local server, e.g., using Python:
   ```
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## Files

- `index.html`: Main HTML structure
- `style.css`: Styling for the interface
- `app.js`: JavaScript logic for calculations

## Mobile App Version

To make VetDose available as a downloadable app on the App Store (iOS) and Google Play (Android), we've set it up using Capacitor. Follow these steps to build and publish the mobile app.

### Prerequisites
- macOS with zsh shell
- Node.js and npm (install via Homebrew if needed: `brew install node`)
- Xcode (for iOS, free from Mac App Store)
- Android Studio (for Android, free download from developer.android.com/studio)

### Setup Steps
1. **Install Capacitor:**
   ```
   npm install @capacitor/core @capacitor/cli
   ```

2. **Initialize Capacitor:**
   ```
   npx cap init "VetDose" "com.example.vetdose" --web-dir=.
   ```

3. **Add Platforms:**
   ```
   npx cap add ios
   npx cap add android
   ```

4. **Sync Web Assets:**
   ```
   npx cap sync
   ```

### Building for iOS
1. Open in Xcode: `npx cap open ios`
2. Select a simulator or device and run.
3. For release: Product > Archive, then distribute to App Store.

### Building for Android
1. Open in Android Studio: `npx cap open android`
2. Select a device/emulator and run.
3. For release: Build > Generate Signed Bundle/APK.

### Publishing
- **iOS:** Requires Apple Developer Program ($99/year). Upload via Xcode.
- **Android:** Requires Google Play Console ($25 one-time). Upload APK/AAB.

For detailed instructions, see the Capacitor documentation: https://capacitorjs.com/docs

### Alternative: Expo Version
A React Native version using Expo is available in the `vetdose` folder. To run it:

1. Navigate to the `vetdose` directory.
2. Run `npm start`.
3. Scan the QR code with Expo Go app or press 'w' for web.

This version includes the same features and can be built for app stores using EAS (Expo Application Services).