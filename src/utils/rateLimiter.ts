type RateLimitInfo = {
  count: number;
  lastAttempt: number;
};

const RATE_LIMIT_KEY = "feedback_rate_limit";
const MAX_ATTEMPTS = 2;
const COOLDOWN_PERIOD = 24 * 60 * 60 * 1000;

export function checkRateLimit(): { allowed: boolean; remainingTime?: number } {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    if (!stored) {
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, lastAttempt: now }));
      return { allowed: true };
    }

    const rateLimitInfo: RateLimitInfo = JSON.parse(stored);
    const timeSinceLastAttempt = now - rateLimitInfo.lastAttempt;

    if (timeSinceLastAttempt >= COOLDOWN_PERIOD) {
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, lastAttempt: now }));
      return { allowed: true };
    }

    if (rateLimitInfo.count < MAX_ATTEMPTS) {
      localStorage.setItem(
        RATE_LIMIT_KEY,
        JSON.stringify({ count: rateLimitInfo.count + 1, lastAttempt: now })
      );
      return { allowed: true };
    }

    const remainingTime = COOLDOWN_PERIOD - timeSinceLastAttempt;
    return { allowed: false, remainingTime };
  } catch {
    return { allowed: true };
  }
}
