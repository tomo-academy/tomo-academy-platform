export default async function handler(req, res) {
  const { endpoint, ...params } = req.query;
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'YouTube API key not configured' });
  }

  try {
    // Build the URL with parameters
    const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
    
    // Add all parameters
    Object.keys(params).forEach(key => {
      if (params[key]) {
        url.searchParams.append(key, params[key]);
      }
    });
    
    // Add API key
    url.searchParams.append('key', apiKey);

    // Add user agent for better tracking
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'TomoAcademyHub/1.0'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ 
        error: errorData.error?.message || 'Unknown error' 
      });
    }

    const data = await response.json();
    
    // Add cache headers for Vercel edge caching
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    res.status(200).json(data);
  } catch (error) {
    console.error('YouTube API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
