import { useState } from "react";
import useMousePointer from "./context/useMousePointer"
import { motion } from "framer-motion"
const App = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePointer();
  const size = isHovered ? 400:20;
  return (
    <div className="main">
      <motion.div 
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{type:"tween", ease:"backOut", duration: 0.5}}
        className="mask">
        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Only seven years of actively producing cool shit. Other years were me messing around and navigating through my career.</p>
      </motion.div>
      <div className="body">
        <p>Over <span>a decade</span> of experience in interactive design and working withsome of the most talented people in the buisness.</p>
      </div>
    </div>
  )
}

export default App