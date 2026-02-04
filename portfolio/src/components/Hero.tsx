import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animation';
import { Button } from '@/components/ui/button';
import { SparkleIcon } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-20"
      id="hero"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 
        border border-ring rounded-sm w-32"
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize 
        mt-2 max-w-3xl md:leading-16"
      >
        I'm <span className="text-primary">Carlos</span> Frontend Developer
      </motion.h1>

      <motion.div variants={fadeUp} className="mt-5 flex gap-2">
        <Button asChild>
          <a href="#projects"> My projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://drive.google.com/file/d/132KmiM4IqxLk9NpLSL4Q0ZJNS0nvOSvz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Download CV{' '}
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
