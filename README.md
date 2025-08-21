# Weather App Project

This is a simple **Weather App** built with **HTML, CSS, and JavaScript**.  
It fetches real-time weather data for any city using the **OpenWeatherMap API**.

## Features

- Input a city name (in English) and get current weather information.
- Displays:
  - City name and country
  - Temperature (°C)
  - Weather description
  - Humidity (%)
  - Wind speed (m/s)
- Responsive and visually appealing design.
- Accessible form elements with focus states.

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Edge, etc.)
- VS Code (optional, recommended)
- Live Server extension for VS Code

### Running the Project
1. Clone or download the repository.  
2. Open the project folder in **VS Code**.  
3. Open `weather.html` with **Live Server** (Right-click → Open with Live Server).  
4. Enter a city name (e.g., Amman, London, New York) and click **Get Weather**.  
5. The weather data will appear below the input field.

### Notes
- Replace the OpenWeatherMap API key in `weather.js` with your own for full functionality:

```javascript
const apiKey = "YOUR_API_KEY";
