import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMapLocationDot, FaPhoneVolume, FaCode, FaLaptopCode, FaServer, FaDesktop, FaPlug, FaBolt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import GradientButton from "./ui/GradientButton";

const infoItems = [
  {
    icon: FaPhoneVolume,
    iconClass: "text-green-600",
    ring: "from-green-400/40 to-teal-500/40",
    label: "Phone Number",
    value: "(+880) 1601707200",
    note: "(whatsapp)",
  },
  {
    icon: MdEmail,
    iconClass: "text-yellow-600",
    ring: "from-yellow-400/40 to-amber-500/40",
    label: "Email Address",
    value: "sunnycse03@gmail.com",
  },
  {
    icon: FaMapLocationDot,
    iconClass: "text-cyan-600 dark:text-cyan-400",
    ring: "from-cyan-400/40 to-blue-500/40",
    label: "Location",
    value: "Nabinagar, Savar, Dhaka",
  },
];

const services = [
  {
    icon: FaCode,
    iconClass: "text-blue-500",
    title: "Full-Stack Development",
    text: "Building end-to-end web applications using modern technologies.",
  },
  {
    icon: FaLaptopCode,
    iconClass: "text-green-500",
    title: "Frontend Development",
    text: "Crafting engaging and responsive user interfaces with React and modern CSS frameworks.",
  },
  {
    icon: FaServer,
    iconClass: "text-red-500",
    title: "Backend Development",
    text: "Developing robust server-side logic and APIs with Node.js and Express.js.",
  },
  {
    icon: FaDesktop,
    iconClass: "text-purple-500",
    title: "Responsive Web Design",
    text: "Ensuring seamless user experience across all devices and screen sizes.",
  },
  {
    icon: FaPlug,
    iconClass: "text-orange-500",
    title: "API Development & Integration",
    text: "Building and integrating robust APIs for seamless data flow.",
  },
  {
    icon: FaBolt,
    iconClass: "text-cyan-500",
    title: "Performance Optimization",
    text: "Optimizing web applications for speed and efficiency.",
  },
];

const ContactMe = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c258c0f4-9700-423f-bc2b-68694d1b3be7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const inputClass =
    "input w-full rounded-xl border border-black/10 bg-white/60 font-sans text-sm text-black focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40 dark:border-white/15 dark:bg-white/5 dark:text-white";

  return (
    <div className="pb-10 text-black dark:text-gray-200">
      <SectionHeading
        eyebrow="Contact"
        title="Get"
        highlight="in Touch"
        sub="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mt-14 mx-auto w-full lg:w-[92%]">
        <GlassCard innerClassName="grid grid-cols-1 gap-10 p-6 lg:grid-cols-2 lg:p-12">
          {/* left — info */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-2xl border border-white/40 bg-white/50 p-5 shadow-md shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 dark:border-white/10 dark:bg-white/5`}
                >
                  <div
                    className={`flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.ring} ${item.iconClass}`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs text-black/50 dark:text-gray-400">{item.label}</p>
                    <p className="font-semibold text-black dark:text-white">
                      {item.value}{" "}
                      {item.note && (
                        <span className="text-xs font-thin italic text-black/40 dark:text-gray-400">
                          {item.note}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex items-center justify-center gap-4 pt-3">
              <a
                href="https://linkedin.com/in/hossainsani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-white/50 text-[#0A66C2] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 dark:border-white/10 dark:bg-white/5"
              >
                <BsLinkedin className="size-5" />
              </a>
              <a
                href="https://github.com/hossain-sani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-white/50 text-black backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <FaGithub className="size-5" />
              </a>
            </div>
            <p className="text-center font-mono text-xs tracking-[0.35em] text-black/50 dark:text-gray-400">
              CONNECT WITH ME
            </p>
          </motion.div>

          {/* right — form */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Send <span className="gradient-text">Message</span>
            </h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="mail@site.com"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Type your text here..."
                  className="textarea w-full rounded-xl border border-black/10 bg-white/60 font-sans text-sm text-black focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  required
                />
              </div>

              <div className="flex flex-col items-start gap-3">
                <GradientButton type="submit" className="w-full">
                  Send Message
                </GradientButton>
              </div>

              {result && (
                <div
                  className={`w-full rounded-xl border px-4 py-3 text-sm font-semibold backdrop-blur-xl ${
                    result === "Sending...."
                      ? "border-blue-400/40 bg-blue-400/10 text-blue-500"
                      : result === "Form Submitted Successfully"
                      ? "border-green-400/40 bg-green-400/10 text-green-600"
                      : "border-red-400/40 bg-red-400/10 text-red-500"
                  }`}
                >
                  {result === "Sending...." ? (
                    <span className="flex items-center gap-2">
                      <span className="size-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    result
                  )}
                </div>
              )}
            </form>
          </motion.div>
        </GlassCard>
      </div>

      {/* Services Section */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="What I Do"
          title="My"
          highlight="Services"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard
                key={index}
                className="text-center"
                innerClassName="p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className={`text-5xl ${service.iconClass}`}>
                  <Icon />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-black dark:text-white lg:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-gray-300">
                  {service.text}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;