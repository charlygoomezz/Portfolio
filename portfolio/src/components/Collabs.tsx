import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import CollabsCard from './CollabsCard';
import { collabs } from '@/constants';

export default function Collabs() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="collabs"
    >
      <SectionHeader subtitle="Collabs" title="Selected Product & Frontend Collaborations" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className="grid md:grid-cols-2 gap-10 mt-10 items-stretch"
      >
        {collabs.map(collab => (
          <motion.div key={collab.title} variants={fadeUp} className="h-full">
            <CollabsCard collabs={collab} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
