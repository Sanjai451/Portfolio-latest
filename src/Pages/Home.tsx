import Details from "../Components/Details";
import HeroSection from "../Components/HeroSection";
import Particles from "../Components/Particles";

const Home = () => {
   return(
    <div style={{ width: '100%', height:'700px'}}>
        <HeroSection/>
        <Particles
            particleColors={['#00000', '#00000']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
        />
        <Details/>
        <footer className="p-2 mt-10 bg-gray-800 text-white text-center">Developed By <a href="https://google.com">Sanjai Kumar R</a></footer>
    </div>
   )
}

export default Home

