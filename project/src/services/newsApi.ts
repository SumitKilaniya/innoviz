import axios from 'axios';
import { NewsItem } from '../types/news';

// In a production app, this would be replaced with a real API
// For demo purposes, we're using mock data

// This would normally be in .env file
const API_KEY = 'DEMO_KEY';
const API_URL = 'https://newsapi.org/v2';

type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: NewsItem[];
};

// Mock data to simulate API responses
const mockNewsData: Record<string, NewsItem[]> = {
  latest: [
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: 'BBC News',
      title: 'Major breakthrough in renewable energy technology announced',
      description: 'Scientists have developed a new solar panel technology that increases efficiency by 40% and could revolutionize clean energy production worldwide.',
      url: 'https://example.com/article1',
      urlToImage: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      publishedAt: '2025-04-30T09:30:00Z',
      content: 'Full article content here...'
    },
    // Add more mock articles...
  ],
  politics: [
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'John Smith',
      title: 'Global leaders agree on new climate accord at international summit',
      description: 'Representatives from 195 countries have reached a historic agreement to limit global warming to 1.5 degrees Celsius by implementing aggressive carbon reduction strategies.',
      url: 'https://example.com/article2',
      urlToImage: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      publishedAt: '2025-04-29T14:15:00Z',
      content: 'Full article content here...'
    },
    // Add more mock articles...
  ],
  // Add more categories...
};

export const getLatestNews = async (): Promise<NewsItem[]> => {
  try {
    // In a real app, this would be an API call
    // return (await axios.get(`${API_URL}/top-headlines?country=us&apiKey=${API_KEY}`)).data.articles;
    
    // For demo, return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockNewsData.latest);
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return [];
  }
};

export const getNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  try {
    // In a real app, this would be an API call
    // return (await axios.get(`${API_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)).data.articles;
    
    // For demo, return mock data based on category or fallback to latest
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockNewsData[category] || mockNewsData.latest);
      }, 500);
    });
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};

export const searchNews = async (query: string): Promise<NewsItem[]> => {
  try {
    // In a real app, this would be an API call
    // return (await axios.get(`${API_URL}/everything?q=${query}&apiKey=${API_KEY}`)).data.articles;
    
    // For demo, return latest news as search results
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockNewsData.latest);
      }, 500);
    });
  } catch (error) {
    console.error('Error searching news:', error);
    return [];
  }
};