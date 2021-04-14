import { connect } from "react-redux";

function SideBar(props) {
  return (
    <div className={`sidebar-container  ${props.sidebarOpen ? "" : "hide"}`}>
      {props.products.map((product) => {
        if (product.id === props.sidebarItem) {
          return (
            <div className="sidebar-content">
              <div className="sidebar-items">
                <div>
                  <img
                    className="sidebar-img"
                    src={product.image}
                    alt="item added to cart"
                  />
                </div>
                <div>{product.title}</div>
              </div>
              <hr />
              <p>Added To Cart</p>
            </div>
          );
        }
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    sidebarOpen: state.sidebarOpen,
    sidebarItem: state.sidebarItem,
  };
};
export default connect(mapStateToProps)(SideBar);
