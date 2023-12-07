import ChefTopCrop from "../assets/cheftopcrop.png"
import ChefBottomCrop from "../assets/chefbottomcrop.png"

function AboutContent (){
    return(
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <img
                className="chefTopCrop"
                src={ChefTopCrop}
                alt="chef with food"
            />
            <img
                className="chefBottomCrop"
                src={ChefBottomCrop}
                alt="chef with food"
            />
        </div>

    )
}

export default AboutContent