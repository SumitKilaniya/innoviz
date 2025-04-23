import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types/news';

type NewsCardProps = {
  article: NewsItem;
  index?: number;
};

const NewsCard = ({ article, index = 0 }: NewsCardProps) => {
  // Format the publication date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <motion.div 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {article.urlToImage && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {article.source?.name && (
            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {article.source.name}
            </span>
          )}
        </div>
      )}
      
      <div className="flex-1 p-4 flex flex-col">
        <div className="mb-2">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-3">
            {article.description}
          </p>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{article.author || 'Unknown'}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 pt-0">
        <Link 
          to={article.url || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline w-full py-2 text-sm"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;