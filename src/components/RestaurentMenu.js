import { useParams } from "react-router-dom";
const RestaurentMenu = ()=>{
    const { resId } = useParams();
    return (
        <div className="restaurent-menu">
            <h1>Restaurent Menu</h1>
            <h2>Menu Items</h2>
            <ul className="menu-list">
                <li>Item 1 + {resId}</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    );
}
export default RestaurentMenu;