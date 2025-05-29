import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Room } from "./Room.jsx"
import { useMediaQuery } from "react-responsive"
import HeroLights from "./HeroLights.jsx"
import { LightBulb } from "./LightBulb.jsx"
import { useRef } from "react"
import { EffectComposer, Bloom } from "@react-three/postprocessing"


const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const groupRef = useRef();


  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <EffectComposer>
      <Bloom 
        luminanceThreshold={0.3}
        luminanceSmoothing={0.9}
        intensity={.5}
      />
      { !isMobile &&
        <OrbitControls 
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />  
      }
        <HeroLights />
        <group 
          ref={groupRef}
          scale={isMobile? 1.7 : 2}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI /4, 0]}
        >
          <LightBulb isMobile={isMobile}/>
          {/** 
          <Room />
          */}
        </group>
        </EffectComposer>
    </Canvas>
  )
}

export default HeroExperience