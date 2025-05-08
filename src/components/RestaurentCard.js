import { CON_URL } from "../utils/constants";

const RestaurentCard=(props)=>{
    const {resdata}=props;
    return (
        <div className="bg-amber-50 rounded-2xl m-4 p-4 hover:bg-amber-950" >
            <img className="w-56" alt="res-logo" 
            src={CON_URL+resdata.card.card.info.cloudinaryImageId}/>
            <h3 className="font-bold">{resdata.card.card.info.name}</h3>
            <h4>{resdata.card.card.info.locality}</h4>
            <h4>{resdata.card.card.info.avgRatingString}</h4>
            <h4>delivery Time: 45 min</h4>
        </div>
    );
};

export const PromotedRes =(RestaurentCard) =>{
    return (props)=> {
        return (
            <div>
                <h1> Promoted</h1>
                <RestaurentCard {...props}/>
            </div>
        )
    }
}

export default RestaurentCard;