import type { CollabsType } from '@/types';

export default function CollabsCard({ collabs }: { collabs: CollabsType }) {
  return (
    <div
      className="flex h-full items-start justify-between rounded-2xl border
     border-neutral-700 p-8"
    >
      <div>
        <h3 className="text-lg font-medium text-white mb-1">{collabs.title}</h3>
        <p className="text-neutral-300 mb-3">{collabs.description}</p>
        <div
          className="flex flex-wrap items-center gap-2 text-sm lining-nums font-medium 
         tracking-wide text-neutral-400"
        >
          <span>{collabs.company}</span>
          <span className="text-neutral-600">•</span>
          <span>{collabs.role}</span>
        </div>
        <a
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium 
          text-primary hover:text-teal-200 transition-colors"
          href={collabs.link}
          target="_blank"
          rel="noreferrer"
        >
          Visit site
        </a>
      </div>
      <div className="shrink-0">
        {(() => {
          const Icon = collabs.icon;
          return <Icon />;
        })()}
      </div>
    </div>
  );
}
