export class RateLimiter {
  constructor(maxRequests, timeWindow) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
    this.requests = new Map();
  }

  isRateLimited(ip) {
    const now = Date.now();
    const windowStart = now - this.timeWindow;

    // Clean up old entries
    for (const [key, timestamp] of this.requests.entries()) {
      if (timestamp < windowStart) {
        this.requests.delete(key);
      }
    }

    const userRequests = Array.from(this.requests.entries())
      .filter(([key]) => key.startsWith(ip))
      .map(([, timestamp]) => timestamp);

    if (userRequests.length >= this.maxRequests) {
      return true;
    }

    this.requests.set(`${ip}-${now}`, now);
    return false;
  }
}

export const contactRateLimiter = new RateLimiter(10, 60000); // 10 requests per minute
