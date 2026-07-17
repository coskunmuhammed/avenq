import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow" className="flex flex-col items-center text-center gap-6">
        <Typography variant="mono" muted>
          00404 // UNRESOLVED ROUTE
        </Typography>
        <Typography variant="display" className="text-4xl md:text-6xl tracking-tight">
          Route does not exist.
        </Typography>
        <Typography variant="body" muted className="max-w-md text-base leading-relaxed">
          This path was never built, or it was removed to preserve simplicity within the AVENQ ecosystem.
        </Typography>
        <div className="pt-4">
          <Button href="/" variant="primary" size="md">
            Return to Root Node
          </Button>
        </div>
      </Container>
    </div>
  );
}
