/// <reference types="vite/client" />

interface Window {
  _meInitTracking?: () => void;
  _meTrackingLoaded?: boolean;
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
}
