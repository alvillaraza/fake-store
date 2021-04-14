import Cart from '../pages/Cart';

function SideBar(props) {

    return (
        <div className={`sidebar-container  ${props.showCart ? "" : "hide"}`}>
            <Cart setShowCart={props.setShowCart}/>
         </div>
    )
}

export default SideBar;