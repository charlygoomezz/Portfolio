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
        Front-end Developer with a solid technical background in application development, holding a
        Higher Technician Degree in Multiplatform Application Development (DAM). I have hands-on
        experience building mobile and web applications using React, Expo, and Next.js, with a
        strong focus on clean code, performance, and reusable components. I’ve worked with modern
        tools and workflows, including CMS integrations, form management, and agile collaboration,
        allowing me to deliver scalable and user-focused solutions.
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
    </motion.section>
  );
}
