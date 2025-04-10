# Weather App

A simple weather application built using HTML, CSS, and JavaScript. This app allows users to search for weather information by city name and displays current weather details such as temperature, humidity, wind speed, and more.

## Features

- **Search Weather by City**: Enter a city name to fetch and display the current weather details.
- **Dynamic UI Updates**: The app dynamically updates the UI with weather data fetched from the OpenWeatherMap API.
- **Responsive Design**: The app is styled using Tailwind CSS for a clean and responsive layout.
- **Error Handling**: Alerts the user if the city is not found or if there is an issue with the API.

## Technologies Used

- **HTML**: For structuring the application.
- **CSS (Tailwind CSS)**: For styling and layout.
- **JavaScript**: For functionality and API integration.
- **OpenWeatherMap API**: For fetching real-time weather data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samonclique/Weather_App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Weather_App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the app in your browser.
2. Enter a city name in the search bar and press "Enter" or click the search button.
3. View the current weather details for the entered city.

## File Structure

```
Weather_App/
├── app.js          # Main JavaScript file for functionality
├── index.html      # Main HTML file
├── input.css       # Tailwind CSS input file
├── styles.css      # Compiled Tailwind CSS file
├── package.json    # Project metadata and scripts
├── .gitignore      # Git ignore file
└── README.md       # Project documentation
```

## API Integration

The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. Replace the `API_KEY` in `app.js` with your own API key to use the app.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.
- [Tailwind CSS](https://tailwindcss.com/) for the responsive and modern design framework.

