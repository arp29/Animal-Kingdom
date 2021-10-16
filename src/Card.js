import react from "react";

const Card=({id,name,link})=> {
    return (
        <div className="Card bg-white dib br3 pa3 ma2 grow bw-2 shadow-5">
            <div>
                <img alt='{props.name}' src={`${link}`} width="400" height="400"/>
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;