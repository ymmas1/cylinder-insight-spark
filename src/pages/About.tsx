import { motion } from "framer-motion";
import { Shield, Users, Lightbulb, Target, Heart, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import warehouseImg from "@/assets/cylinders-warehouse.jpg";
import manufacturingImg from "@/assets/manufacturing-process.jpg";
import bulkImg from "@/assets/bulk-supply.jpg";
import domesticImg from "@/assets/domestic-cylinders.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const values = [
  { icon: Shield, title: "Safety First", desc: "Every cylinder undergoes rigorous testing to meet international safety standards." },
  { icon: Users, title: "Client-Centric", desc: "We prioritize customer satisfaction and tailor solutions to your needs." },
  { icon: Lightbulb, title: "Innovation", desc: "Adopting new materials, designs, and smart technologies for better products." },
  { icon: Target, title: "Quality", desc: "ISO certified with continuous improvement across every process." },
  { icon: Heart, title: "Integrity", desc: "Transparency and honesty in all our business relationships." },
  { icon: Zap, title: "Efficiency", desc: "Fully automated manufacturing line ensuring consistent output." },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 bg-navy text-navy-foreground overflow-hidden">
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Rwanda's Pioneer in LPG Manufacturing
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              We are a leader in delivering safe, innovative, and sustainable LPG energy solutions.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg opacity-80 max-w-xl">
              Cylinders & Tanks Industries is Rwanda's first-ever LPG cylinder manufacturing and revalidation company, championing quality, safety, and sustainability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-display font-bold mb-6">About CTIR</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cylinders & Tanks Industries Limited was established to strengthen national energy infrastructure and promote safe, reliable, and affordable use of Liquefied Petroleum Gas (LPG).
              </p>
              <p>
                The company is ISO certified, operating in full compliance with international quality, safety, and environmental standards. CTIR plays a critical role in supporting Rwanda's clean cooking agenda by localizing LPG cylinder production and extending the lifecycle of existing cylinders through professional revalidation services.
              </p>
              <p>
                We are a client & quality-centric firm driven by passion, aiming to deliver beyond expectations in quality, safety, on-time delivery, and innovation. We consider not only the LPG supplies but the final end-user, whether a household or a business venture.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <img src={warehouseImg} alt="CTIR warehouse" className="rounded-lg w-full aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-warm-gray py-20">
        <div className="container grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative"
          >
            <div className="bg-primary text-primary-foreground rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To be a regional leader in LPG cylinder manufacturing and lifecycle management, contributing to energy safety, industrial growth, and environmental sustainability in East Africa.
              </p>
            </div>
            <img src={bulkImg} alt="CTIR operations" className="rounded-lg mt-6 w-full aspect-video object-cover" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <img src={domesticImg} alt="CTIR products" className="rounded-lg w-full aspect-video object-cover mb-6" />
            <div className="bg-navy text-navy-foreground rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="opacity-90 leading-relaxed">
                To provide safe, high-quality, and locally manufactured LPG cylinders and revalidation services that support Rwanda's energy transition and promote sustainable clean cooking solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Driving Force */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <img src={manufacturingImg} alt="Manufacturing" className="rounded-lg w-full aspect-square object-cover" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="text-3xl font-display font-bold mb-6">Our Driving Force</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We have dedicated greatly to feedback mechanisms ensuring continuous improvement driven by creativity, teamwork, and integrity of our employees.
              </p>
              <p>
                We start every day looking forward to having satisfied customers due to our consistent and timely supply of safe and durable LPG cylinders.
              </p>
              <p>
                By doing so, we hope to steadily grow to a recognized benchmark manufacturing company for the LPG industry in East Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#f6f5f4' }}>
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl font-display font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="border border-muted-foreground/20 rounded-lg p-6 bg-white"
              >
                <v.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm opacity-70">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
