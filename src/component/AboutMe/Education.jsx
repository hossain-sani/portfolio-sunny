import niterlogo from "../../assets/niterlogo.png"
import amritalogo from "../../assets/amritalogo1.png"
import ssclogo from "../../assets/SSClogo.png"
import { motion } from "framer-motion";

const boxClass =
  "timeline-box rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 dark:border-white/10 dark:bg-white/5";

const Education = () => {
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-5">
                <motion.li
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className={`timeline-start ${boxClass} w-auto text-left lg:w-full lg:text-right`}>
                        <span className="badge badge-sm bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-0">2022 - Present</span>
                        <p className="mt-2 font-heading text-lg font-bold">B.Sc in CSE</p>
                        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">National Institute of Textile Engineering & Research</p>
                        <p className="mt-2 text-xs leading-relaxed opacity-90">
                            Currently studying B.Sc in CSE at NITER, located at Nayarhat, Savar, Dhaka.
                        </p>
                        <p className="mt-2 text-sm font-bold">CGPA: 3.47</p>
                    </div>
                    <div className="timeline-middle">
                        <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 p-0.5 shadow-lg shadow-pink-500/25">
                            <img src={niterlogo} alt="niter logo" className="size-8 rounded-full bg-white" />
                        </div>
                    </div>
                    <hr className="bg-gradient-to-r from-cyan-400 to-pink-500" />
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <hr className="bg-gradient-to-r from-cyan-400 to-pink-500" />
                    <div className="timeline-middle">
                        <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 p-0.5 shadow-lg shadow-pink-500/25">
                            <img src={amritalogo} alt="amritalal dey college logo" className="size-8 rounded-full bg-white" />
                        </div>
                    </div>
                    <div className={`timeline-end ${boxClass} w-auto text-left lg:w-full`}>
                        <span className="badge badge-sm bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-0">2019 - 2021</span>
                        <p className="mt-2 font-heading text-lg font-bold">Higher Secondary School Certificate</p>
                        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Amritalal Dey College, Barishal</p>
                        <p className="mt-2 text-xs leading-relaxed opacity-90">
                            I completed HSC from Amritalal Dey College located at Barishal.
                        </p>
                        <p className="mt-2 text-sm font-bold">GPA: 5.00</p>
                    </div>
                    <hr className="bg-gradient-to-r from-cyan-400 to-pink-500" />
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <hr className="bg-gradient-to-r from-cyan-400 to-pink-500" />
                    <div className={`timeline-start ${boxClass} w-auto text-left lg:w-full lg:text-right`}>
                        <span className="badge badge-sm bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-0">2016 - 2019</span>
                        <p className="mt-2 font-heading text-lg font-bold">Secondary School Certificate</p>
                        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Barguna Zilla School</p>
                        <p className="mt-2 text-xs leading-relaxed opacity-90">
                            I completed SSC from Barguna Zilla School located at Barguna.
                        </p>
                        <p className="mt-2 text-sm font-bold">GPA: 5.00</p>
                    </div>
                    <div className="timeline-middle">
                        <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 p-0.5 shadow-lg shadow-pink-500/25">
                            <img src={ssclogo} alt="barguna zilla school logo" className="size-8 rounded-full bg-white" />
                        </div>
                    </div>
                    <hr className="bg-gradient-to-r from-cyan-400 to-pink-500" />
                </motion.li>
            </ul>
        </div>
    );
};

export default Education;