import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animation';
import ToolsCard from './ToolsCard';
import { tools } from '@/constants';

export default function Stack() {
  return (
    <div className="my-6">
      <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-8 capitalize">
        My Stack Knowledge
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4"
      >
        {tools.map((tool, i) => (
          <ToolsCard key={i} tool={tool} />
        ))}
      </motion.div>
    </div>
  );
}
