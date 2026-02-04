import { fadeUp } from '@/lib/animation';
import { SparkleIcon } from 'lucide-react';
import { motion } from 'motion/react';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-ring
        rounded-sm w-32 mb-2"
      >
        <SparkleIcon size={15} /> {subtitle}
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl font-bold capitalize md:max-w-3xl">
        {title}
      </motion.h2>
    </>
  );
}
