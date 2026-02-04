import { type ProjectType } from '@/types';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animation';

export default function ProjectCard({ imgSrc, tags, title }: ProjectType) {
  return (
    <motion.div variants={fadeUp} className="relative">
      <figure className="overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={title}
          className="rounde-md transition duration-500 hover:scale-115 w-full"
        />
      </figure>
      <div className="absolute bottom-0 p-2 flex gap-2 ">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-background hover:bg-primary hover:text-black py-1 
            px-2 rounded-sm text-sm cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
