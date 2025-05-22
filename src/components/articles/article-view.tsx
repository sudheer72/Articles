import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { articles } from '@/lib/data';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(articles.find(a => a.id === id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-8 max-w-4xl">
        <Button variant="ghost" className="mb-8">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="space-y-4">
          <Skeleton className="h-12 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <div className="space-y-4 mt-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button asChild>
          <Link to="/dashboard">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <Button asChild variant="ghost" className="mb-8">
        <Link to="/dashboard">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-primary mb-4">{article.title}</h1>
        <div className="flex gap-4 text-sm text-muted-foreground mb-8">
          <span>Keywords: {article.keyword}</span>
          <span>Traffic: {article.traffic}</span>
          <span>Words: {article.words}</span>
          <span>Created: {article.createdOn}</span>
        </div>
        <div className="bg-card rounded-lg p-6 border-2">
          <p className="text-lg text-muted-foreground">
            This is a preview of the article content. In a real application, this would contain the full article text.
          </p>
        </div>
      </article>
    </div>
  );
}