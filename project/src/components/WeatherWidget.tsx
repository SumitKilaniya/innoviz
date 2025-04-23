import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudFog, Wind, CloudLightning, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

type WeatherData = {
  location: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This would normally use a real API call
    // For demo purposes, we're simulating the data
    const mockWeatherData: WeatherData = {
      location: 'New York, US',
      temperature: 72,
      description: 'Partly Cloudy',
      icon: 'cloudy',
      humidity: 65,
      windSpeed: 8,
      feelsLike: 74
    };

    // Simulate API delay
    const timer = setTimeout(() => {
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Get weather icon based on condition
  const getWeatherIcon = (iconCode: string) => {
    const icons: Record<string, JSX.Element> = {
      clear: <Sun className="h-10 w-10 text-yellow-400" />,
      cloudy: <Cloud className="h-10 w-10 text-gray-400" />,
      rainy: <CloudRain className="h-10 w-10 text-blue-400" />,
      snowy: <CloudSnow className="h-10 w-10 text-blue-200" />,
      foggy: <CloudFog className="h-10 w-10 text-gray-300" />,
      windy: <Wind className="h-10 w-10 text-blue-300" />,
      stormy: <CloudLightning className="h-10 w-10 text-purple-400" />
    };

    return icons[iconCode] || icons.cloudy;
  };

  if (loading) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 backdrop-filter backdrop-blur-sm rounded-lg p-4 shadow-md flex items-center justify-center h-32">
        <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 shadow-md">
        <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <motion.div 
      className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-lg overflow-hidden shadow-lg text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-lg">{weather.location}</h3>
            <p className="text-blue-100 text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
          </div>
          {getWeatherIcon(weather.icon)}
        </div>
        
        <div className="mt-4 flex items-end">
          <span className="text-4xl font-bold">{weather.temperature}°</span>
          <span className="ml-2 text-blue-100">{weather.description}</span>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <Thermometer className="h-4 w-4 mx-auto mb-1" />
            <span className="block text-xs text-blue-100">Feels Like</span>
            <span className="font-medium">{weather.feelsLike}°</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <CloudRain className="h-4 w-4 mx-auto mb-1" />
            <span className="block text-xs text-blue-100">Humidity</span>
            <span className="font-medium">{weather.humidity}%</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <Wind className="h-4 w-4 mx-auto mb-1" />
            <span className="block text-xs text-blue-100">Wind</span>
            <span className="font-medium">{weather.windSpeed} mph</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;