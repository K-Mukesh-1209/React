import { CON_URL } from "../utils/constants";

const RestaurentCard=(props)=>{
    const {resdata}=props;
    return (
        <div className="res-card" >
            <img className="res-logo" alt="res-logo" 
            src={CON_URL+resdata.card.card.info.cloudinaryImageId}/>
            <h3>{resdata.card.card.info.name}</h3>
            <h4>{resdata.card.card.info.locality}</h4>
            <h4>{resdata.card.card.info.avgRatingString}</h4>
            <h4>delivery Time: 45 min</h4>
        </div>
    );
};

export default RestaurentCard;