import img1 from '../assests/react_meme.png';

const Card = () =>{
    const Image=()=>{
        return(
            <img src= {img1}
                alt="memes"/>  
        );
    };

    return(
        <div className="card">
            <Image/>
            <h2>Meme Card</h2>
            <p>Rate this Meme card</p>
        </div>
    );
};

export default Card;