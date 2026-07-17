import { Container } from '@/components/ui/Container';

export default function Loading() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow" className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Compiling view...
          </span>
        </div>
      </Container>
    </div>
  );
}
