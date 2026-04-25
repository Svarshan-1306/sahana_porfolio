import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, Linkedin, ArrowRight, Heart, Sparkles } from "lucide-react";
import hero from "@/assets/hero-luna.jpg"; // hero image

import d1 from "@/assets/design-1.jpg";
import d2 from "@/assets/design-2.jpg";
import d3 from "@/assets/design-3.jpg";
import d4 from "@/assets/design-4.jpg";

const featured = [
  {
    title: "Design 1",
    category: "Illustration 2024",
    image: d1,
    slug: "design-1",
  },
  {
    title: "Design 2",
    category: "Illustration 2024",
    image: d2,
    slug: "design-2",
  },
  {
    title: "Design 3",
    category: "Illustration 2024",
    image: d3,
    slug: "design-3",
  },
  {
    title: "Design 4",
    category: "Illustration 2024",
    image: d4,
    slug: "design-4",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-peach-light">
        {/* Background Blob Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-lavender rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-peach-dark rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="flex flex-col relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-muted-foreground font-medium mb-6"
              >
                <span>Hello, I'm Sahana</span>
                <span className="text-pink">✦</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif-display text-[4rem] sm:text-[5rem] lg:text-[6.5rem] leading-[1.05] text-navy tracking-tight"
              >
                Designing
                <br />
                Dreams.
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif-display italic text-pink text-[4rem] sm:text-[5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight mt-[-1rem]"
              >
                Wearing Art.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-muted-foreground text-lg max-w-md"
              >
                A fashion designer and creative storyteller crafting vibrant, modern designs that celebrate individuality and emotions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 mt-10"
              >
                <Link
                  to="/work"
                  className="bg-lavender-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-navy transition-colors flex items-center gap-3"
                >
                  View My Work <ArrowRight size={18} />
                </Link>
                
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:hello@sahana.studio"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:bg-pink hover:text-white hover:border-pink transition-all"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:bg-pink hover:text-white hover:border-pink transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>


            </div>

            {/* Right Column (Hero Image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[500px] md:h-[700px]"
            >
              <div className="w-full h-full rounded-t-full overflow-hidden shadow-2xl relative z-10 border-[8px] border-white/50">
                <img
                  src={hero}
                  alt="Sahana Fashion Design"
                  className="w-full h-full object-cover object-center"
                />
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section className="bg-lavender-light py-24 md:py-32 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-pink font-bold mb-4">
                FEATURED WORK <Sparkles size={14} />
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl text-navy">
                A Glimpse of My Creations
              </h2>
            </div>
            
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-white transition-colors self-start md:self-auto"
            >
              Explore All Projects <ArrowRight size={16} className="text-muted-foreground" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((work, i) => (
              <motion.div
                key={work.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-muted mb-5 shadow-sm relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm transition-shadow group-hover:shadow-md">
                  <div>
                    <h3 className="font-serif-display text-xl text-navy leading-tight">{work.title}</h3>
                    <p className="text-[0.75rem] text-muted-foreground mt-1">{work.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-lavender-DEFAULT flex items-center justify-center text-navy group-hover:bg-pink group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* QUOTE BANNER */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-peach-DEFAULT/40 to-lavender-DEFAULT/40 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="text-6xl text-white font-serif-display absolute top-6 left-10 md:left-20 opacity-70">"</div>
            <p className="font-serif-display italic text-2xl md:text-3xl text-navy max-w-2xl relative z-10">
              "Fashion is the armor to survive the reality of everyday life."
            </p>
            <p className="mt-4 text-pink font-medium text-sm">
              – Bill Cunningham
            </p>
            
            <div className="absolute bottom-6 right-10 md:right-20 text-pink/60 rotate-[-15deg]">
              <Heart size={48} strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
