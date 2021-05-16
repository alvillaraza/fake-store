import { connect } from "react-redux";

function SideBar(props) {
  return (
    <div className={`sidebar-container  ${props.sidebarOpen ? "" : "hide"}`}>
      {props.products.map((product) => {
        if (product.id === props.sidebarItem) {
          return (
            <div className="sidebar-items" key={product.id}>
              <div>
                <img
                  className="sidebar-img"
                  src={product.image}
                  alt="item added to cart"
                />
              </div>
              <div className="sidebar-desc">
                <p>Item is in your basket!</p>
                <div className="desc">
                  <i
                    className="fa fa-shopping-bag animate__animated
                    animate__bounce"
                    aria-hidden="true"
                  ></i>
                  {product.title}
                </div>
              </div>
            </div>
          );
        } else {
          return ''
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
