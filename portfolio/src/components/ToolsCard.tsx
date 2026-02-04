import { fadeUp } from '@/lib/animation';
import type { ToolsType } from '@/types';
import { motion } from 'motion/react';

export default function ToolsCard({ tool }: { tool: ToolsType }) {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-neutral-700 rounded-md flex 
      justify-center items-center flex-col py-4 "
    >
      <img src={tool.imgSrc} alt={tool.label} />
      <p className="font-bold pt-2">{tool.label}</p>
    </motion.div>
  );
}
