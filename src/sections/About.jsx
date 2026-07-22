import { GraduationCap, Sparkles, Target } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import { slideInLeft, slideInRight, staggerContainer } from "@/animations/variants";
import { motion } from "framer-motion";

const CARDS = [
  {
    icon: Sparkles,
    title: "My Passion",
    body: "I enjoy the process as much as the result — the small win of a layout finally lining up, or an animation feeling just right.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "Currently pursuing my Master of Computer Applications, building on a foundation in computer science fundamentals.",
  },
  {
    icon: Target,
    title: "Career Objective",
    body: profile.careerObjective,
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="The story so"
          highlight="far"
          description="A little about how I got here, what drives me, and where I'm headed next."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* <Reveal variants={slideInLeft} className="glass rounded-3xl p-8 lg:col-span-2">
            <div className="flex flex-col gap-5">
              {profile.longBio.map((para, i) => (
                <p key={i} className="text-text-muted leading-relaxed">
                  {para}
                </p>
              ))}
              <p className="text-sm text-text-faint">{profile.location}</p>
            </div>
          </Reveal> */}

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px 0px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-3 lg:grid-rows-1"
          >


            {CARDS.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={slideInRight}
                className="glass group rounded-3xl p-7 transition-colors duration-300 hover:border-primary/30"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{body}</p>
              </motion.div>
            ))}

            {/* <div className="glass grid grid-cols-4 gap-6 rounded-3xl p-7 sm:col-span-4">
              {profile.stats.map((stat) => (
                <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div> */}


          </motion.div>
        </div>
      </div>
    </section>
  );
}
