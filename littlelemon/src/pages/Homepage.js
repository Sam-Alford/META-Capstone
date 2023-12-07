import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"


function Homepage (){
    return(
        <div>
            <Hero />
            <Specials />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Homepage