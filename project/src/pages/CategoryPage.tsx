import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNewsList from '../components/CategoryNewsList';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  useEffect(() => {
    if (category) {
      document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} News - FactVerse`;
    }
  }, [category]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <CategoryNewsList category={category} />
    </div>
  );
};

export default CategoryPage;