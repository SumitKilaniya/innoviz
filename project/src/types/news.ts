export type NewsSource = {
  id: string | null;
  name: string;
};

export type NewsItem = {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};