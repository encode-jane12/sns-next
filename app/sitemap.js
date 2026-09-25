export default function sitemap() {
  const baseUrl = 'https://snsconstruction.com';
  const routes = ["app\\about-us\\sns-construction\\our-code-of-conduct\\","app\\about-us\\sns-construction\\our-history\\","app\\about-us\\sns-construction\\our-organization\\","app\\about-us\\sns-construction\\our-purpose-and-values\\","app\\about-us\\sns-construction\\quick-facts\\","app\\about-us\\sns-construction\\usa-leadership-team\\","app\\about-us\\sns-construction-group\\investors\\","app\\careers\\openings\\","app\\careers\\","app\\careers\\verification\\","app\\commercial-development\\","app\\commercial-offices\\","app\\construction\\approach\\community-investment\\","app\\construction\\approach\\delivery-methods\\","app\\construction\\approach\\environmental-health-safety\\","app\\construction\\approach\\ethics\\","app\\construction\\approach\\inclusion-diversity\\","app\\construction\\approach\\subcontractors-suppliers\\","app\\construction\\expertise\\emerging-technology\\","app\\construction\\expertise\\megaprojects\\","app\\construction\\expertise\\programmanagement\\","app\\construction\\expertise\\strategic-supply-chain\\","app\\construction\\expertise\\sustainability\\","app\\construction\\transportation-infrastructure\\airports\\","app\\construction\\transportation-infrastructure\\bridges\\","app\\construction\\transportation-infrastructure\\dams\\","app\\construction\\transportation-infrastructure\\equipment-for-sale\\","app\\construction\\transportation-infrastructure\\highways-roads\\","app\\construction\\transportation-infrastructure\\mining\\","app\\construction\\transportation-infrastructure\\ports-marine\\","app\\construction\\transportation-infrastructure\\resiliency\\","app\\construction\\transportation-infrastructure\\structural-steel\\","app\\construction\\transportation-infrastructure\\transit-rail\\","app\\construction\\transportation-infrastructure\\tunneling\\","app\\construction\\transportation-infrastructure\\underpinning-foundations\\","app\\construction\\transportation-infrastructure\\water-wastewater-systems\\","app\\cookie\\","app\\cultural-religious\\","app\\data-centers\\","app\\government-municipal\\","app\\healthcare\\","app\\higher-education\\","app\\hotels\\","app\\k-12-education\\","app\\media\\","app\\multi-family\\","app\\offer-verification\\","app\\","app\\parks-waterfront\\","app\\policy\\","app\\science-technology\\","app\\sports\\","app\\terms-of-use\\","app\\verification\\","app\\where-we-work\\"];
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...routes.map(route => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  ]
}
