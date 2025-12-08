export const env = {
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-05-01',
    token: process.env.SANITY_API_TOKEN, 
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://psicologaisabelafrotte.com.br',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  },
};
