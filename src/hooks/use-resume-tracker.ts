export default function trackResumeDownload(method: string = "unknown") {
  try {
    if (typeof window !== "undefined" && (window as any).gtag) {
      // Fire a GA4 / gtag event if available
      (window as any).gtag("event", "download_cv", {
        method,
      });
      // Don't block navigation — gtag should handle it asynchronously
      console.log("gtag: download_cv", method);
      return;
    }

    // Fallback: increment a localStorage counter so you can inspect downloads during development
    const key = "resumeDownloads";
    const prev = Number(localStorage.getItem(key) ?? 0);
    const next = prev + 1;
    localStorage.setItem(key, String(next));
    console.log(`resumeDownloads (fallback): ${next}`);
  } catch (err) {
    // Never throw from tracking
    // eslint-disable-next-line no-console
    console.warn("trackResumeDownload failed", err);
  }
}
