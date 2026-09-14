import AboutMe from "./component/AboutMe"
// import BannerLite from "./component/Archrive/BannerLite"
// import NavbarLite from "./component/Archrive/NavbarLite"
// import Banner from "./component/Banner"
import ContactMe from "./component/ContactMe"
import MyProject from "./component/MyProject"
import MySkill from "./component/MySkill"
import StatsWithGithubConnection from "./component/StatsGithubConnection"
// import Photo from "./component/Photo"
import PhotoNew from "./component/PhotoNew"
// import Stats from "./component/Stats"
import { motion } from "framer-motion";



function Home() {


  return (
    <>


      <div className="container mx-auto  space-y-32  ">
        {/* <Banner></Banner> */}
        {/* <Photo></Photo> */}
        <PhotoNew></PhotoNew>
    
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            ease: "easeOut",
            
          }}
          viewport={{ once: true, amount: 0.75 }} // triggers once when 20% is visible
        >

          {/* <Stats></Stats> */}
          <StatsWithGithubConnection></StatsWithGithubConnection>
        </motion.div>

        <AboutMe></AboutMe>
        <MyProject></MyProject>
        <MySkill></MySkill>
        <ContactMe></ContactMe>
      </div>




    </>
  )
}

export default Home
