import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="container pt-36 md:pt-48 pb-20">
        <p className="text-[0.7rem] tracking-editorial uppercase text-accent mb-6">— Contact</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
          Begin a <em className="text-accent not-italic">conversation.</em>
        </h1>
        <p className="mt-8 max-w-lg text-base text-muted-foreground">
          For collaborations, opportunities, or simply to say hello — please reach out through any of the channels below.
        </p>
      </section>

      <section className="container pb-32 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20"
        >
          <div>
            <p className="text-[0.65rem] tracking-label uppercase text-muted-foreground mb-4">Email</p>
            <a href="mailto:hello@sahana.studio" className="font-serif-display text-2xl md:text-3xl flex flex-col gap-3 hover:text-accent transition-colors">
              <Mail size={24} className="text-accent" />
              hello@sahana.studio
            </a>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-label uppercase text-muted-foreground mb-4">WhatsApp</p>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="font-serif-display text-2xl md:text-3xl flex flex-col gap-3 hover:text-accent transition-colors">
              <Phone size={24} className="text-accent" />
              Chat with me
            </a>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-label uppercase text-muted-foreground mb-4">LinkedIn</p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-serif-display text-2xl md:text-3xl flex flex-col gap-3 hover:text-accent transition-colors">
              <Linkedin size={24} className="text-accent" />
              Connect
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <p className="text-[0.65rem] tracking-label uppercase text-muted-foreground mb-3">Based in</p>
          <p className="font-serif-display text-2xl">Chennai, India</p>
          <p className="text-sm text-muted-foreground mt-1">Available for relocation</p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Contact;
