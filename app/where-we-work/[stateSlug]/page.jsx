import LocationDetail from '@/src/views/LocationDetail/LocationDetail';

export async function generateMetadata({ params }) { 
  const paramsResolved = await params;
  const slug = paramsResolved.stateSlug;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | SNS Construction`,
    description: `Learn more about ${title} at SNS Construction.`,
  };
 }

export default function Page() {
  return <LocationDetail />;
}
