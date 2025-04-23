import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Tag } from 'lucide-react';
import { NewsItem } from '../types/news';
import NewsCard from './NewsCard';

type CategoryNewsListProps = {
  category: string;
};

const CategoryNewsList = ({ category }: CategoryNewsListProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sortBy: 'latest',
    source: 'all'
  });

  useEffect(() => {
    // Reset to loading state when category changes
    setLoading(true);
    
    // This would typically be a real API call with the category parameter
    // For demo purposes, we're using mock data
    const fetchNewsForCategory = async () => {
      // Simulating an API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in a real app, this would come from a news API
      const mockCategoryNews: NewsItem[] = [
        {
          source: { id: 'bbc-news', name: 'BBC News' },
          author: 'BBC News',
          title: `${category.charAt(0).toUpperCase() + category.slice(1)}: Major development announced`,
          description: `Important news related to ${category} that could have significant impacts on society and various industries.`,
          url: 'https://example.com/article1',
          urlToImage: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          publishedAt: '2025-04-30T09:30:00Z',
          content: 'Full article content here...'
        },
        {
          source: { id: 'cnn', name: 'CNN' },
          author: 'John Smith',
          title: `New research in ${category} field reveals surprising insights`,
          description: `A recent study in the field of ${category} has uncovered unexpected connections that challenge conventional understanding.`,
          url: 'https://example.com/article2',
          urlToImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          publishedAt: '2025-04-29T14:15:00Z',
          content: 'Full article content here...'
        },
        {
          source: { id: 'nyt', name: 'New York Times' },
          author: 'Jane Doe',
          title: `Expert panel discusses future of ${category} at international forum`,
          description: `Leading experts gathered to debate the future trajectory of ${category} and its impact on global systems.`,
          url: 'https://example.com/article3',
          urlToImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          publishedAt: '2025-04-28T11:45:00Z',
          content: 'Full article content here...'
        },
        {
          source: { id: 'wapo', name: 'Washington Post' },
          author: 'Robert Johnson',
          title: `New policy framework for ${category} proposed by government`,
          description: `Lawmakers have introduced a comprehensive policy framework aimed at addressing challenges in the ${category} sector.`,
          url: 'https://example.com/article4',
          urlToImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          publishedAt: '2025-04-27T16:20:00Z',
          content: 'Full article content here...'
        },
        {
          source: { id: 'guardian', name: 'The Guardian' },
          author: 'Emma Williams',
          title: `Breakthrough in ${category} could transform everyday life`,
          description: `Recent innovation in ${category} has the potential to revolutionize how we approach common tasks and challenges.`,
          url: 'https://example.com/article5',
          urlToImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          publishedAt: '2025-04-26T08:10:00Z',
          content: 'Full article content here...'
        },
        {
          source: { id: 'ft', name: 'Financial Times' },
          author: 'Michael Brown',
          title: `Market analysts predict growth in ${category} sector despite challenges`,
          description: `Economic forecasts suggest the ${category} sector will see continued expansion despite regulatory and economic hurdles.`,
          url: 'https://example.com/article6',
          urlToImage: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          publishedAt: '2025-04-25T13:40:00Z',
          content: 'Full article content here...'
        }
      ];
      
      setNews(mockCategoryNews);
      setLoading(false);
    };
    
    fetchNewsForCategory();
  }, [category]);

  const handleFilterChange = (filterType: 'sortBy' | 'source', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Apply filters to news articles
  const filteredNews = news.filter(article => {
    if (filters.source === 'all') return true;
    return article.source?.name?.toLowerCase().includes(filters.source.toLowerCase());
  }).sort((a, b) => {
    if (filters.sortBy === 'latest') {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else {
      // For 'popular' sorting in a real app, this would use a popularity metric
      // Here we're just randomizing for demo purposes
      return 0.5 - Math.random();
    }
  });

  return (
    <div>
      {/* Category Header */}
      <motion.div 
        className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white capitalize">
          {category}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Stay updated with the latest news and developments in {category}.
        </p>
      </motion.div>
      
      {/* Filters */}
      <motion.div 
        className="mb-8 flex flex-wrap items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">Filters:</span>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            <select 
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">Source:</span>
            <select 
              value={filters.source}
              onChange={(e) => handleFilterChange('source', e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Sources</option>
              <option value="bbc">BBC News</option>
              <option value="cnn">CNN</option>
              <option value="nyt">New York Times</option>
              <option value="guardian">The Guardian</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Tag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Popular Tags:</span>
          <div className="flex space-x-2">
            {['Latest', 'Trending', 'Analysis'].map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* News Articles */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow-md h-96 animate-pulse">
              <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article, idx) => (
                <NewsCard key={idx} article={article} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No articles found matching your filters.</p>
              <button 
                onClick={() => setFilters({ sortBy: 'latest', source: 'all' })}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryNewsList;