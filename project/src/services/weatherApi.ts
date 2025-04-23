import axios from 'axios';

// This would normally be in .env file
const API_KEY = 'DEMO_KEY';
const API_URL = 'https://api.openweathermap.org/data/2.5';

type WeatherData = {
  location: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
};

// Mock data to simulate API responses
const mockWeatherData: WeatherData = {
  location: 'New York, US',
  temperature: 72,
  description: 'Partly Cloudy',
  icon: 'cloudy',
  humidity: 65,
  windSpeed: 8,
  feelsLike: 74
};

export const getCurrentWeather = async (city: string = 'New York'): Promise<WeatherData> => {
  try {
    // In a real app, this would be an API call
    // const response = await axios.get(`${API_URL}/weather?q=${city}&units=imperial&appid=${API_KEY}`);
    // return {
    //   location: `${response.data.name}, ${response.data.sys.country}`,
    //   temperature: Math.round(response.data.main.temp),
    //   description: response.data.weather[0].description,
    //   icon: mapWeatherIconToCode(response.data.weather[0].icon),
    //   humidity: response.data.main.humidity,
    //   windSpeed: Math.round(response.data.wind.speed),
    //   feelsLike: Math.round(response.data.main.feels_like)
    // };
    
    // For demo, return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...mockWeatherData,
          location: `${city}, US`
        });
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};

// Map OpenWeatherMap icon codes to our simpler set
const mapWeatherIconToCode = (iconCode: string): string => {
  const iconMap: Record<string, string> = {
    '01d': 'clear',
    '01n': 'clear',
    '02d': 'cloudy',
    '02n': 'cloudy',
    '03d': 'cloudy',
    '03n': 'cloudy',
    '04d': 'cloudy',
    '04n': 'cloudy',
    '09d': 'rainy',
    '09n': 'rainy',
    '10d': 'rainy',
    '10n': 'rainy',
    '11d': 'stormy',
    '11n': 'stormy',
    '13d': 'snowy',
    '13n': 'snowy',
    '50d': 'foggy',
    '50n': 'foggy'
  };
  
  return iconMap[iconCode] || 'cloudy';
};