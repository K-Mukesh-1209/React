import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState,useEffect, use } from "react";

const Body = ()=>{
    //Local state variable
    const [restaurents, setRestaurents] = useState(resList);
    const [search, setSearch] = useState("");
    useEffect(() => {
        console.log("useEffect called");
        const data = fetchData();
        console.log(data);
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
        const json = await data.json();
        console.log(json);
        return json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type="text"  className="search-input" value={search} onChange={(e)=>{
                        setSearch(e.target.value);
                    }}/>
                    <button className="search-btn"
                    onClick={()=>{
                        const filter_resList = resList.filter((res) => {
                            return res?.card?.card?.info?.name?.toLowerCase()?.includes(search.toLowerCase());
                        });
                        setRestaurents(filter_resList);
                        console.log(filter_resList);}}>Search</button>
                    </div>
                <button
                className="filter-btn"
                onClick={() => {
                    var filter_resList = resList.filter((res) => {
                    const rating = res?.card?.card?.info?.avgRatingString;
                    return  parseInt(rating, 10) >=4 ; 
                    });
                    setRestaurents(filter_resList);
                    console.log(filter_resList);
                }}
                >
                Top rated Restaurants
                </button>
            </div>
            <div className="res-Container">
                {restaurents.map((res) => (
                  <RestaurentCard key={res.card.card.info.id} resdata={res} />
                ))}
            </div>
        </div>
    );
}

export default Body;