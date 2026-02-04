import { education, experience, tools } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animation';
import { motion } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';
import ExpCard from '@/components/ExpCard';
import ToolsCard from './ToolsCard';

export default function Resume() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="resume"
    >
      <SectionHeader subtitle="Resume" title="Education and Practical Experience" />
      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </motion.p>
      <div className="grid gap-x-10 my-16 md:grid-cols-2">
        <motion.div variants={fadeUp} className="mb-16 md:mb-0">
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <div className="space-y-8 border-l border-border pl-6">
            {education.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16 md:mb-0">
          <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
          <div className="space-y-8 border-l border-border-700 pl-6">
            {experience.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="my-16">
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-8 capitalize">
          My favorite tools
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
    </motion.section>
  );
}
