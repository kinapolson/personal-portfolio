import { motion } from 'framer-motion';
import background from '../../assets/water-BG.jpg'; // Make sure this path is correct

function Home() {
  return (
    <motion.div 
      className="home-page-0"
      style={{ backgroundImage: `url(${background})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="home-page">
        <h1 className="homeTitle">KINA</h1>
      </div>
    </motion.div>
  );
}

export default Home;
