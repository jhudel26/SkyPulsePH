# SkyPulsePH - Air Quality & Weather Monitor

A real-time air quality and weather monitoring web application for the Philippines, providing comprehensive environmental data with health recommendations and 5-day forecasts.

![SkyPulsePH](https://img.shields.io/badge/SkyPulsePH-Air%20Quality%20%26%20Weather-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## 🌟 Features

- **Real-time Air Quality Monitoring**: Live AQI data with pollutant breakdown (PM2.5, PM10, O₃, NO₂, SO₂, CO, CO₂)
- **Weather Forecast**: Current weather conditions and 5-day forecast with temperature, humidity, wind speed, and precipitation
- **Comprehensive Location Coverage**: All 17 regions of the Philippines with provinces and municipalities
- **Health Recommendations**: Contextual health advice for general public and sensitive groups
- **Interactive Visualizations**: 
  - Circular AQI gauge with animated progress
  - 5-day air quality forecast chart
  - Pollutant progress bars with color-coded indicators
- **Dark/Light Theme**: Toggle between light and dark modes with preference persistence
- **Data Export**: Download air quality data as CSV
- **Share Functionality**: Native sharing API support
- **Responsive Design**: Mobile-friendly interface with smooth animations
- **Data Caching**: 10-minute cache to reduce API calls and improve performance

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **APIs**: 
  - Open-Meteo Air Quality API (CAMS global atmospheric composition)
  - Open-Meteo Weather API
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Inter)
- **No Frameworks**: Vanilla JavaScript for maximum performance and simplicity

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API data fetching
- No build tools or dependencies required

## 🚀 Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd AirQualityMonitor
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **No build process needed** - The application runs directly in the browser

## 📖 Usage

### Select a Location
1. Choose a Region from the dropdown
2. Select a Province (auto-populated based on region)
3. Pick a City/Municipality
4. Or use the quick access buttons for major cities (Manila, Quezon City, Cebu, Davao)

### View Air Quality Data
- **AQI Overview**: Main AQI value with status and color-coded gauge
- **Pollutant Analysis**: Detailed breakdown of all pollutants with progress bars
- **Health Recommendations**: Advice for general public and sensitive groups
- **5-Day Forecast**: Interactive chart showing air quality trends

### View Weather Data
- **Current Conditions**: Temperature, feels like, humidity, wind speed/direction
- **Weather Description**: Current weather condition with icon
- **5-Day Forecast**: Daily cards with temperature range, precipitation, and wind

### Additional Features
- **Theme Toggle**: Switch between light and dark modes (click moon/sun icon)
- **Refresh Data**: Click the refresh button to fetch latest data
- **Export Data**: Download air quality data as CSV
- **Share**: Share current air quality data via native sharing API

## 🔧 Configuration

### API Key
The application uses Open-Meteo's free tier by default. If you need an API key:

1. Visit [Open-Meteo API](https://open-meteo.com/en/docs/air-quality-api)
2. Get your free API key
3. Update the API key in `index.html`:
   ```html
   <script>
       window.AIR_QUALITY_API_KEY = 'your-api-key-here';
   </script>
   ```

### Timezone
The application is configured for Philippines timezone (Asia/Manila). To change:

1. Open `script.js`
2. Search for `timezone=Asia/Manila`
3. Replace with your desired timezone

## 📁 Project Structure

```
AirQualityMonitor/
├── index.html          # Main HTML structure
├── script.js           # Application logic and API integration
├── styles.css          # Styling and design system
└── README.md           # Project documentation
```

### Key Components

**HTML (`index.html`)**
- Header with logo, time display, and theme toggle
- Location selector with region/province/city hierarchy
- Air quality dashboard with AQI gauge and pollutant cards
- Weather section with current conditions and forecast
- Information sections (About, FAQ, Health Guidelines)
- Footer with links and credits

**JavaScript (`script.js`)**
- `ThemeManager`: Theme switching and persistence
- `AirQualityAPI`: API integration with caching
- `philippinesData`: Geographic data structure
- `displayAirQuality()`: Main display logic
- `updateWeatherDisplay()`: Weather UI updates
- Chart rendering and interactivity

**CSS (`styles.css`)**
- CSS custom properties for theming
- Responsive grid layouts
- Animations and transitions
- Glass morphism effects
- Mobile-first design

## 🌐 API Information

### Open-Meteo Air Quality API
- **Endpoint**: `https://air-quality-api.open-meteo.com/v1/air-quality`
- **Data Source**: CAMS global atmospheric composition forecasts
- **Parameters**: AQI, PM2.5, PM10, O₃, NO₂, SO₂, CO, CO₂
- **Forecast**: 5 days with hourly data

### Open-Meteo Weather API
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Parameters**: Temperature, humidity, wind, weather codes
- **Forecast**: 5 days with daily summaries

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Danger**: Red (#ef4444)
- **Info**: Blue (#3b82f6)

### AQI Categories
- **Good (0-50)**: Green
- **Moderate (51-100)**: Yellow
- **Unhealthy for Sensitive (101-150)**: Orange
- **Unhealthy (151-200)**: Red
- **Very Unhealthy (201-300)**: Purple
- **Hazardous (301+)**: Maroon

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

**Developed by [Jhudel](https://jhudel.vercel.app/)**

- Portfolio: [jhudel.vercel.app](https://jhudel.vercel.app/)
- Year: 2026

## 🙏 Acknowledgments

- **Open-Meteo** for providing free and open weather and air quality data
- **CAMS** (Copernicus Atmosphere Monitoring Service) for atmospheric composition data
- **Font Awesome** for the icon library
- **Google Fonts** for the Inter typeface

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the developer via [portfolio](https://jhudel.vercel.app/)

## 🔄 Version History

- **v1.0.0** (2026)
  - Initial release
  - Air quality monitoring for Philippines
  - Weather forecast integration
  - Dark/Light theme support
  - Responsive design
  - Data export and sharing features

---

**SkyPulsePH** - Empowering Filipinos with real-time environmental data for healthier decisions.
