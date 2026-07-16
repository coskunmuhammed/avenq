import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow" className="flex flex-col items-center text-center gap-6">
        <Typography variant="mono" muted>
          ERROR 404 — PAGE NOT FOUND
        </Typography>
        <Typography variant="display" className="text-4xl md:text-6xl">
          Resource Unavailable
        </Typography>
        <Typography variant="lead" muted className="max-w-md">
          The requested route does not exist or has been relocated within the AVENQ platform ecosystem.
        </Typography>
        <div className="pt-4">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
