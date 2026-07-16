'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[AVENQ Application Error Boundary]:', error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow" className="flex flex-col items-center text-center gap-6">
        <Typography variant="mono" muted>
          APPLICATION ERROR
        </Typography>
        <Typography variant="h1" className="text-3xl md:text-5xl">
          System Exception Occurred
        </Typography>
        <Typography variant="body" muted className="max-w-md">
          A runtime error occurred while rendering this view. Our telemetry has logged the anomaly.
        </Typography>
        <div className="flex items-center gap-4 pt-4">
          <Button onClick={() => reset()} variant="primary" size="md">
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="md">
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
