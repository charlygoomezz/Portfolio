import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="about"
    >
      <SectionHeader subtitle="About" title="Transforming compleity into effortless design" />
      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </motion.p>
      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        <Button className="mt-5">Contact me</Button>
      </motion.div>
    </motion.section>
  );
}
