import { type ProjectType } from '@/types';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animation';

export default function ProjectCard({
  imgSrc,
  stack,
  title,
  description,
  descriptionLink,
  projectLink,
  secondaryLink,
}: ProjectType) {
  return (
    <motion.div variants={fadeUp} className="space-y-3">
      <div className="relative">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block">
          <figure className="overflow-hidden rounded-md aspect-[3-2]">
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </figure>
          <div className="absolute bottom-0 p-2 flex gap-2">
            {stack.map(tool => (
              <span key={tool.label} aria-label={tool.label}>
                <img
                  src={tool.imgSrc}
                  alt={tool.label}
                  className="h-5 w-5 filter brightness-60 saturate-10"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </a>
        {secondaryLink && (
          <div className="absolute top-2 right-2 z-10">
            <a
              href={secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-100 text-black border border-gray-300 px-3 py-1 rounded-md text-sm font-medium hover:bg-primary hover:border-primary transition shadow-lg"
            >
              Watch Presentation
            </a>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        {description && (
          <div className="space-y-2">
            <p className="text-sm text-gray-400">{description}</p>
            {descriptionLink && (
              <a
                href={descriptionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-100 transition"
              >
                You can see the Thesis
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
