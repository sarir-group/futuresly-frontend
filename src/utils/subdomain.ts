export const getValidSubdomain = (host?: string | null) => {
  let subdomain: string | null = null;
  if (!host && typeof window !== 'undefined') {
    host = window.location.host;
  }
  if (host && host.includes('.')) {
    const parts = host.split('.');
    if (parts.length > 2) {
      const candidate = parts[0];
      if (candidate && !candidate.includes('localhost')) {
        subdomain = candidate;
      }
    }
  }
  return subdomain;
};