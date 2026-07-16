import React from 'react';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

interface RoadmapCardProps {
  title: string;
  category: string;
  targetTimeline: string;
  description: string;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  title,
  category,
  targetTimeline,
  description,
}) => {
  return (
    <Card variant="bordered" padding="md" className="h-full flex flex-col justify-between opacity-85 hover:opacity-100 transition-opacity">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Badge status="roadmap">{targetTimeline}</Badge>
          <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
            {category}
          </span>
        </div>

        <div>
          <Typography variant="h3" className="text-xl font-medium mb-2">
            {title}
          </Typography>
          <Typography variant="body" muted className="text-sm leading-relaxed">
            {description}
          </Typography>
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
        <span>Architectural Phase</span>
        <span>Internal Engineering</span>
      </div>
    </Card>
  );
};
