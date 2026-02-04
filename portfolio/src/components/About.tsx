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
      <SectionHeader
        subtitle="About"
        title="Code, Climb, Create: Building Digital Experiences Through Exploration."
      />
      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        I’m a curious and adventurous Front-end Developer who enjoys learning through exploration,
        both in tech and in life. I love solving problems, whether it’s in code, in the kitchen, or
        while planning my next trip. Outside of development, I’m passionate about climbing, Japanese
        culture, traveling, and cooking—interests that fuel my creativity, focus, and perseverance.
      </motion.p>
      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        <Button className="mt-5">Contact me</Button>
      </motion.div>
    </motion.section>
  );
}
