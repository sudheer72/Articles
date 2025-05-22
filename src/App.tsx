import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingScreen } from '@/components/loading-screen';

const Dashboard = lazy(() => import('@/components/dashboard/dashboard'));
const ArticleView = lazy(() => import('@/components/articles/article-view'));
const NotFound = lazy(() => import('@/components/not-found'));

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <div className="min-h-screen bg-background">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/articles/:id" element={<ArticleView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;