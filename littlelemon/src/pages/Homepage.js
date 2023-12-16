import Hero from "../components/Hero"
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"
import AboutContent from "../components/AboutContent"

function Homepage (){
    return(
        <body>
            <Hero />
            <Specials />
            <Testimonials />
            <AboutContent />
        </body>
    )
}

export default Homepage