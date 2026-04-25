import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import portrait from "@/assets/portrait.png";

const AboutMe = () => (
  <Layout>
    <section className="container pt-36 md:pt-48 pb-28 md:pb-40">
      <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-6">— About</p>
      <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
        Designing in the language of <em className="text-accent not-italic">expression.</em>
      </h1>
    </section>

    <section className="container pb-32 md:pb-48">
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div className="overflow-hidden bg-muted aspect-[4/5] shadow-editorial">
            <img
              src={portrait}
              alt="Portrait of Sahana"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-[0.65rem] tracking-label uppercase text-muted-foreground">
            Studio portrait — 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="md:col-span-7 md:pl-8 lg:pl-16 space-y-12"
        >
          <div>
            <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-4">Introduction</p>
            <p className="font-serif-display text-2xl md:text-3xl leading-[1.4] text-foreground">
              I am Sahana — a first-year Fashion Technology student at VIT Chennai, passionate about costume design and kidswear. As a Bharatanatyam dancer, I draw inspiration from movement, tradition, and expression.
            </p>
          </div>

          <div className="h-px gold-line" />

          <div>
            <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-4">Philosophy</p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              I believe that fashion is a powerful medium for storytelling. My work is deeply influenced by the discipline and narrative forms of Bharatanatyam, investigating how movement interacts with cloth. I strive to design pieces that are not only visually striking but also emotionally expressive, bringing a creative approach to color and form.
            </p>
          </div>

          <div>
            <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-4">Path & Goals</p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              As an active volunteer at SSSST, I deeply value collaboration, discipline, and community engagement. Currently in my first year, I am eager to explore the worlds of costume design and kidswear, translating my love for tradition and energetic storytelling into tangible, meaningful garments.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-[0.65rem] tracking-label uppercase text-muted-foreground mb-2">Disciplines</p>
            <p className="font-serif-display text-xl">Tailoring · Draping</p>
            <p className="text-sm text-muted-foreground">Pattern · Embroidery</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="container pb-32 md:pb-48">
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-navy mb-16">EDUCATION</h2>
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-[5px] left-0 w-[80%] h-px bg-border hidden md:block z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {/* Node 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-3 h-3 bg-navy rounded-full mb-6 hidden md:block relative z-10 ring-4 ring-background"></div>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm md:text-base">(2021)</p>
              <h3 className="font-bold text-navy uppercase text-sm md:text-[0.95rem] tracking-wide leading-snug">NSN MEMORIAL SCHOOL</h3>
              <p className="text-sm md:text-base text-muted-foreground">SSLC - 92.60%</p>
            </div>
          </motion.div>
          
          {/* Node 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="w-3 h-3 bg-navy rounded-full mb-6 hidden md:block relative z-10 ring-4 ring-background"></div>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm md:text-base">(2023)</p>
              <h3 className="font-bold text-navy uppercase text-sm md:text-[0.95rem] tracking-wide leading-snug">NSN MEMORIAL SCHOOL</h3>
              <p className="text-sm md:text-base text-muted-foreground">HSC - 90.00%</p>
            </div>
          </motion.div>
          
          {/* Node 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="w-3 h-3 bg-navy rounded-full mb-6 hidden md:block relative z-10 ring-4 ring-background"></div>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm md:text-base">(2023 - 2027)</p>
              <h3 className="font-bold text-navy uppercase text-sm md:text-[0.95rem] tracking-wide leading-snug">VIT CHENNAI - B.Tech Fashion Technology</h3>
              <p className="text-sm md:text-base text-muted-foreground">CGPA : 9.1
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutMe;
