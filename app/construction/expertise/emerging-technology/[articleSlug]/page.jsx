import TechArticle from '@/src/views/EmergingTechnology/TechArticle';

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
  return <TechArticle />;
}
