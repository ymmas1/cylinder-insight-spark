import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Factory, Truck, FlaskConical, Cylinder, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-factory.jpg";
import domesticImg from "@/assets/domestic-cylinders.jpg";
import commercialImg from "@/assets/commercial-cylinders.jpg";
import refurbishmentImg from "@/assets/refurbishment.jpg";
import qualityImg from "@/assets/quality-testing.jpg";
import bulkImg from "@/assets/bulk-supply.jpg";
import warehouseImg from "@/assets/cylinders-warehouse.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  { title: "Domestic Cylinders", desc: "3kg, 6kg, and 12kg LPG cylinders for household use.", img: domesticImg },
  { title: "Commercial Tanks", desc: "50kg to 2.5 tonne LPG tanks for industrial applications.", img: commercialImg },
  { title: "Cylinder Revalidation", desc: "Full refurbishment with powder coating and hydrostatic testing.", img: refurbishmentImg },
  { title: "Quality Assurance", desc: "ISO certified with 11+ quality tests on every cylinder.", img: qualityImg },
  { title: "Bulk Supply", desc: "Supplying to Rwanda, DRC, Burundi and growing.", img: bulkImg },
  { title: "Custom Manufacturing", desc: "Cylinder sizes and branding adapted to client requirements.", img: warehouseImg },
];

const stats = [
  { value: "705,600+", label: "Annual Cylinder Capacity" },
  { value: "30+", label: "Employees" },
  { value: "ISO", label: "Certified Operations" },
  { value: "3", label: "Countries Supplied" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CTIR manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Rwanda's First LPG Cylinder Manufacturer
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-display font-bold text-background leading-tight mb-6">
              Cylinders & Tanks Industries Rwanda
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-background/80 mb-8 max-w-lg">
              Safe, high-quality, locally manufactured LPG cylinders and revalidation services supporting Rwanda's energy transition.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/manufacturing#contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                <Link to="/about">About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-navy-foreground py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">{s.value}</div>
              <div className="text-sm mt-1 opacity-80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Products & Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From domestic cylinders to industrial tanks, we deliver quality LPG solutions across East Africa.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-gray py-20">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Partner with CTIR</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Looking for a reliable LPG cylinder manufacturing partner? We offer custom solutions tailored to your needs.
            </p>
            <Button asChild size="lg">
              <Link to="/manufacturing#contact">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
