import niterlogo from "../../assets/niterlogo.png"
import amritalogo from "../../assets/amritalogo1.png"
import ssclogo from "../../assets/SSClogo.png"
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div>


            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-5">
                <motion.li
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",

                    }}
                    viewport={{ once: true, amount: 0.2 }} // triggers once when 20% is visible
                >
                    <div className="timeline-start timeline-box  text-left lg:text-right bg-white dark:bg-slate-800 w-auto lg:w-full">2022-present <br />
                        B.Sc in Computer Science and enginering. <br />

                        National Institute of Textile engineering & Research. <br />

                        Currently I am studying B.Sc in CSE at National Institute of Textile Engineering and Research located at Nayarhat, Savar, Dhaka. <br />
                        CGPA: 3.47</div>
                    <div className="timeline-middle">

                        <img src={niterlogo} alt="niter logo" className="size-8" />
                    </div>
                    <hr className="bg-primary" />
                </motion.li>
                {/* 2nd */}
                <motion.li
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        delay: 0.3
                    }}
                    viewport={{ once: true, amount: 0.2 }} // triggers once when 20% is visible
                >
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <img src={amritalogo} alt="niter logo" className="size-8" />
                    </div>
                    <div className="timeline-end timeline-box text-left bg-white dark:bg-slate-800 w-auto lg:w-full">
                        2019-2021 <br />
                        Higher Secondary School Certificate<br />

                        Amritalal Dey College, Barishal<br />

                        I completed HSC from Amritalal Dey College located at Barishal<br />

                        GPA: 5.00

                    </div>
                    <hr className="bg-primary" />
                </motion.li>
                {/* 3rd */}
                <motion.li
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        delay: 0.5
                    }}
                    viewport={{ once: true, amount: 0.2 }} // triggers once when 20% is visible
                >
                    <hr className="bg-primary" />
                    <div className="timeline-start timeline-box text-left lg:text-right bg-white dark:bg-slate-800 w-auto lg:w-full">
                        2016-2019  <br />
                        Secondary School Certificate <br />

                        Barguna zilla School <br />

                        I completed SSC from Barguna zilla School located at Barguna <br />

                        GPA: 5.00


                    </div>
                    <div className="timeline-middle">
                        <img src={ssclogo} alt="niter logo" className="size-8" />
                    </div>
                    <hr className="bg-primary" />
                </motion.li>
                {/* 2nd */}
                {/* <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box text-left">
                        2019-2021 <br />
                        Higher Secondary School Certificate<br />

                        Saydabad Ideal Govt College & University<br />

                        I completed HSC from Saydabad Ideal Govt College & University located at saydabad, kasba, Brahmanbaria.<br />

                        GPA: 5.00

                    </div>

                </li> */}



            </ul>


        </div>
    );
};

export default Education;