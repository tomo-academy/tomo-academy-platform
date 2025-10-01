const CACHE_PREFIX = 'tomo_academy_';
const CACHE_TTL = 3600000; // 1 hour in milliseconds

export const cache = {
  get(key) {
    if (typeof window === 'undefined') return null;
    
    const cached = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_TTL) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }
    
    return data;
  },
  
  set(key, data) {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  },
  
  clear() {
    if (typeof window === 'undefined') return;
    
    Object.keys(localStorage)
      .filter(key => key.startsWith(CACHE_PREFIX))
      .forEach(key => localStorage.removeItem(key));
  }
};

export async function cachedFetch(url, cacheKey, fetchOptions = {}) {
  // Try to get from cache first
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  
  // Fetch from API
  const response = await fetch(url, fetchOptions);
  const data = await response.json();
  
  // Cache the result
  cache.set(cacheKey, data);
  
  return data;
}
