import NewsArticle from '@/src/views/NewsArticle/NewsArticle';

export async function generateMetadata({ params }) { 
  const paramsResolved = await params;
  const slug = paramsResolved.articleSlug;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | SNS Construction`,
    description: `Learn more about ${title} at SNS Construction.`,
  };
 }

export default function Page() {
  return <NewsArticle />;
}
