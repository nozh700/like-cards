import {useState} from "react";
import "./Card.css";

function Card(props){
    const [liked, setLiked]=useState(false);

    function handleClick(){
        setLiked(!liked);
    }
    return(
        <div className="card">
        <h3>{props.title}</h3>
        <p>{liked ? "Liked" :"Not Liked"}</p>
            <button onClick={handleClick}>
                {liked ? "Unliked":"Like"}
            </button>
        </div>    
    );
}
export default Card;