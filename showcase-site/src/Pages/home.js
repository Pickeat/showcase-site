import NavBar from '../Components/NavBar'
import Pic01 from '../Constants/pic01.jpg'
import HeroSection from "../Components/HeroSection";
import Team from "../Components/Team";
import Contact from "../Components/Contact";

export default function Home() {
    return (
        <div className="relative bg-white">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <NavBar/>
                        <HeroSection/>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={Pic01}
                        alt=""
                    />
                </div>
            </div>

            <Team/>
            <Contact/>
        </div>
    )
}
