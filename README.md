Klimate 

A modern, minimalist weather application built with React that provides real-time weather information for any location worldwide.
Features

Location Search - Search for weather by city name
Current Weather - Display temperature, wind speed, and weather conditions
Modern UI - Sleek glassmorphic design with a dark theme
Weather Icons - Dynamic icons that change based on weather conditions
Real-time Updates - Powered by Open-Meteo API for accurate weather data

Tech Stack

React - Frontend framework
Tailwind CSS - Styling
Open-Meteo API - Weather data provider
React Icons - Weather and UI icons

Installation

1. Clone the repository:
git clone <repository-url>
cd klimate

2. Install dependencies:
npm install

3. Install required packages:
npm install react-icons

4. Start the development server:
npm run dev

bashnpm run dev
Project Structure
src/
├── App.jsx              # Main application component
├── components/
│   ├── NavBar.jsx       # Navigation bar component
│   ├── SearchBar.jsx    # Search input component
│   ├── Weather.jsx      # Weather display wrapper
│   └── WeatherCard.jsx  # Weather information card

Components
App.jsx
Main component that manages weather state and API calls. Handles fetching weather data from Open-Meteo API using city coordinates.
NavBar.jsx
Simple navigation bar displaying the "Klimate" branding.
SearchBar.jsx
Search input with icon that allows users to enter city names. Supports both button click and Enter key submission.
Weather.jsx
Container component that displays error messages and renders the weather card.
WeatherCard.jsx
Displays detailed weather information including:

City name and country
Weather icon (based on weather code)
Temperature in Celsius
Wind speed
Last update time

Weather Codes
The app displays different icons based on weather codes:

0-1: Clear/Sunny (Yellow sun icon)
2-3: Cloudy (Gray cloud icon)
45-67: Rain (Blue rain icon)
80-99: Thunderstorm (Purple thunderstorm icon)

API Usage
The application uses two free APIs from Open-Meteo:

Geocoding API - Converts city names to coordinates
Weather API - Fetches current weather data based on coordinates

No API key required!
Styling
The app features a modern design with:

Dark background theme
Glassmorphic effects (backdrop blur, transparency)
Gradient text effects
Responsive layout for mobile and desktop
Smooth transitions and hover effects

Browser Support
Works on all modern browsers that support ES6+ and React 18+.
License
MIT License - feel free to use this project for personal or commercial purposes.
Acknowledgments

Weather data provided by Open-Meteo
Icons from React Icons