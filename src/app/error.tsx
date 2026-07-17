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
    console.error('[AVENQ System Boundary Anomaly]:', error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow" className="flex flex-col items-center text-center gap-6">
        <Typography variant="mono" muted>
          SYSTEM EXCEPTION // DISRUPTED ROUTE
        </Typography>
        <Typography variant="h1" className="text-3xl md:text-5xl tracking-tight">
          Execution Halted.
        </Typography>
        <Typography variant="body" muted className="max-w-md text-base leading-relaxed">
          A runtime exception occurred while rendering this component. Telemetry has logged the event details.
        </Typography>
        <div className="flex items-center gap-4 pt-4">
          <Button onClick={() => reset()} variant="primary" size="md">
            Re-evaluate Component
          </Button>
          <Button href="/" variant="secondary" size="md">
            Return to Root Node
          </Button>
        </div>
      </Container>
    </div>
  );
}
