// Simple analytics tracking using localStorage
// For production, integrate with Google Analytics, Mixpanel, etc.

const ANALYTICS_KEY = "portfolio_analytics";

const getAnalytics = () => {
  try {
    const data = localStorage.getItem(ANALYTICS_KEY);
    return data ? JSON.parse(data) : {
      resumeDownloads: [],
      formSubmissions: [],
      pageViews: [],
      sectionViews: {},
    };
  } catch (error) {
    console.error("Error reading analytics:", error);
    return {
      resumeDownloads: [],
      formSubmissions: [],
      pageViews: [],
      sectionViews: {},
    };
  }
};

const saveAnalytics = (data) => {
  try {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving analytics:", error);
  }
};

export const trackResumeDownload = () => {
  const analytics = getAnalytics();
  analytics.resumeDownloads.push({
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
  });
  saveAnalytics(analytics);
  
  console.log("📊 Resume downloaded!", {
    totalDownloads: analytics.resumeDownloads.length,
    timestamp: new Date().toLocaleString(),
  });
};

export const trackFormSubmission = (formData) => {
  const analytics = getAnalytics();
  analytics.formSubmissions.push({
    timestamp: new Date().toISOString(),
    name: formData.name,
    email: formData.email,
    messageLength: formData.message.length,
  });
  saveAnalytics(analytics);
  
  console.log("📊 Form submitted!", {
    totalSubmissions: analytics.formSubmissions.length,
    timestamp: new Date().toLocaleString(),
  });
};

export const trackPageView = () => {
  const analytics = getAnalytics();
  analytics.pageViews.push({
    timestamp: new Date().toISOString(),
    url: window.location.href,
    referrer: document.referrer,
  });
  saveAnalytics(analytics);
};

export const trackSectionView = (sectionName) => {
  const analytics = getAnalytics();
  if (!analytics.sectionViews[sectionName]) {
    analytics.sectionViews[sectionName] = 0;
  }
  analytics.sectionViews[sectionName]++;
  saveAnalytics(analytics);
};

export const getAnalyticsStats = () => {
  const analytics = getAnalytics();
  
  return {
    totalResumeDownloads: analytics.resumeDownloads.length,
    totalFormSubmissions: analytics.formSubmissions.length,
    totalPageViews: analytics.pageViews.length,
    sectionViews: analytics.sectionViews,
    lastDownload: analytics.resumeDownloads[analytics.resumeDownloads.length - 1],
    lastSubmission: analytics.formSubmissions[analytics.formSubmissions.length - 1],
  };
};

export const clearAnalytics = () => {
  localStorage.removeItem(ANALYTICS_KEY);
  console.log("📊 Analytics cleared!");
};

// Display analytics in console
export const showAnalytics = () => {
  const stats = getAnalyticsStats();
  
  console.log("📊 Portfolio Analytics Dashboard");
  console.log("================================");
  console.log(`📥 Resume Downloads: ${stats.totalResumeDownloads}`);
  console.log(`📧 Form Submissions: ${stats.totalFormSubmissions}`);
  console.log(`👁️  Page Views: ${stats.totalPageViews}`);
  console.log("\n📍 Section Views:");
  Object.entries(stats.sectionViews).forEach(([section, views]) => {
    console.log(`   ${section}: ${views} views`);
  });
  
  if (stats.lastDownload) {
    console.log(`\n⏰ Last Download: ${new Date(stats.lastDownload.timestamp).toLocaleString()}`);
  }
  
  if (stats.lastSubmission) {
    console.log(`⏰ Last Submission: ${new Date(stats.lastSubmission.timestamp).toLocaleString()}`);
  }
  
  console.log("\n💡 Tip: Run showAnalytics() anytime to see updated stats");
  console.log("💡 Tip: Run clearAnalytics() to reset all data");
};

// Auto-track page view on load
if (typeof window !== "undefined") {
  trackPageView();
}

// Make functions available in console
if (typeof window !== "undefined") {
  window.showAnalytics = showAnalytics;
  window.clearAnalytics = clearAnalytics;
  window.getAnalyticsStats = getAnalyticsStats;
}
