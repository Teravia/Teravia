import * as Sentry from "@sentry/nextjs";

export const initSentry = () => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0, // Menangkap 100% data transaksi untuk debugging
      debug: false,
    });
  }
};

// Helper khusus jika kamu ingin mencatat error manual di try-catch block
export const logErrorToSentry = (error: any, context?: Record<string, any>) => {
  console.error("Logged Error:", error);
  Sentry.captureException(error, {
    extra: context,
  });
};
