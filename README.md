# 🐾 Aliyah's VetDose

A professional veterinary medication dosage calculator app for dogs and cats. Calculate safe medication doses based on patient weight with bilingual (English/Spanish) support and a beautiful, user-friendly interface.

## ✨ Features

- **11 Common Medications**: Amoxicillin, Carprofen, Enrofloxacin, Metronidazole, Prednisone, Doxycycline, Cephalexin, Gabapentin, Tramadol, Famotidine, and Maropitant
- **Accurate Dosing**: Precise mg/kg calculations for safe medication administration
- **Bilingual Interface**: Full English/Spanish translations for global accessibility
- **Frequency Information**: Shows dosing frequency (times per day) for each medication
- **Weight Unit Support**: Calculate using either kg or lbs
- **Safety Warnings**: Alerts for very small or large patients
- **Responsive Design**: Works perfectly on desktop and mobile browsers
- **Network Accessible**: Access from any device on your network
- **Persistent History**: Saves calculation history for quick reference

## 🚀 Quick Start

### Web App (Recommended)
The app is already running on your machine at:
- **Local**: `http://localhost:8000`
- **Network**: `http://10.0.0.83:8000` (from any device on WiFi)

Simply open in any browser—no installation needed!

### Manual Server Start
If the server stops, restart it:
```bash
cd vetdose-app
python3 -m http.server --bind 0.0.0.0 8000
```

### Mobile App (React Native / Expo)
```bash
cd vetdose
npm install
npm start
```
Scan the QR code with Expo Go app or press `i` for iOS simulator / `a` for Android simulator.

## 📋 Supported Medications

| Medication | Dose (mg/kg) | Frequency |
|------------|--------------|-----------|
| Amoxicillin | 10 | 2-3x daily |
| Carprofen | 4 | 1-2x daily |
| Enrofloxacin | 5 | 1-2x daily |
| Metronidazole | 10 | 2x daily |
| Prednisone | 0.5 | 1-2x daily |
| Doxycycline | 5 | 1-2x daily |
| Cephalexin | 20 | 2x daily |
| Gabapentin | 10 | 2-3x daily |
| Tramadol | 2 | 2-3x daily |
| Famotidine | 0.5 | 2x daily |
| Maropitant | 1 | 1x daily |

## 🛠️ Project Structure

```
vetdose-app/          # Web application (HTML/CSS/JavaScript)
├── index.html        # Main UI
├── app.js            # Calculation logic & translations
├── style.css         # Styling with German Shepherd background
├── run_server.sh     # Server startup script
├── package.json      # Dependencies
└── vetdose-mobile/   # Mobile companion app

vetdose/              # React Native Expo app
├── App.js            # Mobile UI
├── app.json          # Expo configuration
└── package.json      # Dependencies
```

## 💻 Technical Stack

- **Web**: HTML5, CSS3, Vanilla JavaScript
- **Mobile**: React Native (Expo)
- **Server**: Python HTTP Server (built-in, no dependencies)
- **Hosting**: Local network accessible, can be deployed to cloud
- **Translations**: EN/ES (easily expandable)
- **Storage**: Browser localStorage for history

## 🎨 Design Highlights

- German Shepherd themed background
- Green accent colors for veterinary theme
- Responsive layout for all screen sizes
- Beautiful typography and spacing
- Accessibility-friendly interface

## 📱 How to Use

1. **Enter Patient Weight**: Type the weight in kg or lbs
2. **Select Medication**: Choose from dropdown list
3. **Click Calculate**: Get instant dosage in mg
4. **View Frequency**: See how many times per day to administer
5. **Check Warnings**: Heed alerts for very small/large patients
6. **Consult Vet**: Always confirm with veterinarian before administering

### Browser Console Commands

For advanced users, these functions are available:
```javascript
changeLang('en')      // Switch to English
changeLang('es')      // Switch to Spanish
calculateDose()       // Run calculation programmatically
saveHistory(med, dose) // Save to history
```

## ⚠️ Important Disclaimer

**This calculator is for reference only.** Always consult with a licensed veterinarian before administering any medication. Dosages may vary based on individual patient conditions, concurrent medications, and other health factors.

## 🔧 Permanent Server Setup

The server is configured to run automatically on system boot via launchd (macOS).

**To manage the service:**
```bash
# Start service
launchctl load ~/Library/LaunchAgents/com.vetdose.server.plist

# Stop service
launchctl unload ~/Library/LaunchAgents/com.vetdose.server.plist

# Check status
launchctl list | grep vetdose

# View logs
tail -f /tmp/vetdose-server.log
```

## 📊 Network Access

Once running, access from:
- **Same Mac**: `http://localhost:8000`
- **Other devices on WiFi**: `http://10.0.0.83:8000`
- **Custom domain**: Can be configured with a reverse proxy

## 🚢 Deployment Options

- **Local Network**: Currently running on home network
- **Cloud Deployment**: Can be hosted on Heroku, Vercel, AWS, etc.
- **Docker**: Can be containerized for easy deployment
- **Mobile App**: Distribute via Expo or as native iOS/Android builds

## 📝 Future Enhancements

- [ ] Add more medications
- [ ] Save calculation history to cloud
- [ ] Add weight conversion calculator
- [ ] Create native iOS/Android apps
- [ ] Add print-friendly receipt
- [ ] Support for additional languages
- [ ] Dosing charts and reference guides

## 👤 Author

Created for Aliyah | Veterinary Dosage Calculator

## 📄 License

MIT License - Feel free to use and modify for personal or professional use.

---

**Ready to showcase!** This project demonstrates:
- Clean, professional code structure
- Responsive web design
- Full i18n support
- Mobile compatibility
- User-friendly UX
- Practical veterinary utility
