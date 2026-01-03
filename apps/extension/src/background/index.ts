// Background service worker
console.log('OnPlan extension background service worker initialized');

chrome.runtime.onInstalled.addListener(() => {
  console.log('OnPlan extension installed');
});
