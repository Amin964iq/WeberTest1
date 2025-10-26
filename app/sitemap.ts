import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://weber.com'
  const locales = ['en', 'ar']
  const currentDate = new Date()
  
  // Static pages
  const pages = ['', '/about', '/services', '/contact']
  
  // Service pages - Updated to only include 3 main services
  const services = [
    'web-development',
    'custom-systems',
    'cybersecurity-solutions',
  ]
  
  // Generate URLs for all pages in all locales
  const pageUrls: MetadataRoute.Sitemap = []
  
  // Add main pages
  locales.forEach(locale => {
    pages.forEach(page => {
      pageUrls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      })
    })
    
    // Add service detail pages
    services.forEach(service => {
      pageUrls.push({
        url: `${baseUrl}/${locale}/services/${service}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })
  
  return pageUrls
}

