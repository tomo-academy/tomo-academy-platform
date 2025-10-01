export function trackApiCall(endpoint, success, duration) {
  if (typeof window === 'undefined') return;
  
  // Send to your analytics service
  if (window.gtag) {
    window.gtag('event', 'api_call', {
      event_category: 'youtube_api',
      event_label: endpoint,
      success: success,
      value: duration
    });
  }
  
  // Also send to a custom endpoint for monitoring
  fetch('/api/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      endpoint,
      success,
      duration,
      timestamp: new Date().toISOString()
    })
  }).catch(console.error);
}
