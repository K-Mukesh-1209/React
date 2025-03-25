import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = ()=>{
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    //Filter logic
                    resList = resList.filter(
                        (res) =>res.card.card.info.avgRating>4
                    );
                    console.log(resList);
                    }}>
                        Top rated Restaurents
                    </button>
            </div>
            <div className="res-Container">
                {resList.slice(3, 10).map((res) => (
                  <RestaurentCard key={res.card.card.info.id} resdata={res} />
                ))}
            </div>
        </div>
    );
};

export default Body;