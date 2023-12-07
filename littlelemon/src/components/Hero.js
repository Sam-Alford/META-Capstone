import heroImage from '../assets/heroImage.png'

function Hero (){
    return(
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
    )
}

export default Hero