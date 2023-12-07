import heroImage from '../assets/heroImage.png'
import FullScreenSection from "./FullScreenSection";

function Hero (){
    return(
        <FullScreenSection>
        <div className="hero">
            <h1 className="title">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="resButton">Reserve a Table</button>
            <div>
                <img
                    className="heroImage"
                    src={heroImage}
                    alt="chef with food"
                />
            </div>
        </div>
        </FullScreenSection>
    )
}

export default Hero