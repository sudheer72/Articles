import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { DataTable } from '@/components/dashboard/data-table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArticleData, columns } from '@/components/dashboard/columns';
import { articles } from '@/lib/data';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('generated');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Simulate API loading
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const filteredArticles = articles.filter((article) => {
    const matchesTab = 
      (activeTab === 'generated' && article.status === 'generated') ||
      (activeTab === 'published' && article.status === 'published') ||
      (activeTab === 'scheduled' && article.status === 'scheduled') ||
      (activeTab === 'archived' && article.status === 'archived');
    
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keyword.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && (searchQuery === '' || matchesSearch);
  });

  return (
    <div className="grid lg:grid-cols-[280px_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-8 text-primary">Articles</h1>
              
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full max-w-md" />
                  <Skeleton className="h-[300px] w-full rounded-md" />
                </div>
              ) : (
                <>
                  <Tabs defaultValue="generated" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="w-full max-w-2xl mb-8 bg-card border-2 p-1 gap-1">
                      <TabsTrigger value="generated" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                        Generated Articles
                      </TabsTrigger>
                      <TabsTrigger value="published" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                        Published Articles
                      </TabsTrigger>
                      <TabsTrigger value="scheduled" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                        Scheduled Articles
                      </TabsTrigger>
                      <TabsTrigger value="archived" className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                        Archived Articles
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="w-full mb-8 relative max-w-sm">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for Title & Keywords..."
                      className="pl-9 bg-card border-2"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <DataTable columns={columns} data={filteredArticles as ArticleData[]} />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}