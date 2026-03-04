import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import manufacturingImg from "@/assets/manufacturing-process.jpg";
import warehouseImg from "@/assets/cylinders-warehouse.jpg";
import qualityImg from "@/assets/quality-testing.jpg";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const whyChoose = [
  "Rwanda's first and most trusted LPG cylinder manufacturer with extensive experience in safe, high-quality production.",
  "Every cylinder is manufactured under strict international safety guidelines and quality checks, ensuring maximum durability and reliability.",
  "Fully licensed and compliant with Rwanda Standards Board (RSB) and ISO certifications.",
  "Creates local employment opportunities and supports the growth of Rwanda's energy infrastructure.",
  "Regularly adopts new materials, designs, and smart technologies for transparency and safety tracking.",
  "Manufacturing capacity of over 705,600 complete LPG cylinders annually.",
];

const productionSteps = [
  "Cylinder Body Forming",
  "Trimming & Beading",
  "Guard Ring Production",
  "Bottom Ring Assembly",
  "Precision Welding",
  "Heat Treatment (875°C–920°C)",
  "Hydrostatic Testing",
  "Shot Blasting",
  "Powder Painting & Baking",
  "Valving & Pneumatic Testing",
  "Screen Printing & Dispatch",
];

const Manufacturing = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    privacyAccepted: false,
  });

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast({ title: "Please accept the privacy policy", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setFormData({ name: "", phone: "", email: "", location: "", message: "", privacyAccepted: false });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Want a cylinder manufacturing partner?
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Manufacture with CTIR
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
              We are a cylinder manufacturing and LPG revalidation company in Rwanda. We aim to address the unmet demand for LPG in both the domestic and industrial sector. Manufacture with us today for quality work.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4">
              <Button asChild>
                <a href="#contact">Email Us <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#why-choose">Why Choose Us</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            <img src={warehouseImg} alt="CTIR cylinders" className="rounded-lg w-full aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="bg-warm-gray py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Manufacture with CTIR</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <img src={manufacturingImg} alt="Manufacturing process" className="rounded-lg w-full aspect-square object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <img src={qualityImg} alt="Quality testing" className="rounded-lg w-full aspect-video object-cover mb-6" />
            <div className="bg-navy text-navy-foreground rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-2">Quality Assurance</h3>
              <p className="text-sm opacity-80">
                Our lab is fitted with equipment that tests the quality of all manufactured cylinders. Testing at every step ensures durability, consistency, safety and overall quality.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="text-3xl font-display font-bold mb-6">Our Production Process</h2>
            <p className="text-muted-foreground mb-6">
              Our fully automated manufacturing line uses cutting-edge Chinese technology, ensuring efficient and effective production through 11 key stages.
            </p>
            <ol className="space-y-3">
              {productionSteps.map((step, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-warm-gray py-20">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-2">Email Us</h2>
            <p className="text-muted-foreground">Fill the form below to get in touch with our representative.</p>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card rounded-lg p-8 shadow-sm border border-border"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name *</label>
              <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Mobile Number *</label>
              <Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email *</label>
              <Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Location *</label>
              <Input required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message *</label>
              <Textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                checked={formData.privacyAccepted}
                onCheckedChange={(checked) => setFormData({ ...formData, privacyAccepted: checked === true })}
              />
              <span className="text-xs text-muted-foreground">
                I accept the Privacy Policy of Cylinders & Tanks Industries Rwanda Limited.
              </span>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Submit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting your details, you agree that CTIR may use your information to keep you informed about relevant offers, updates, and important news regarding our products and services.
            </p>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
