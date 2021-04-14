// import { connect } from "react-redux";

// function SideBar(props) {
//   return (
//     <div className={`sidebar-container  ${props.showCart ? "" : "hide"}`}>
//       <div className="sidebar-content">
//         <div className="sidebar-items">
//           <div>
//             <img
//               className="sidebar-img"
//               src={props.itemAdded.image}
//               alt="item added to cart"
//             />
//           </div>
//           <div>{props.itemAdded.title}</div>
//         </div>
//         <hr />
//         <p>Added To Cart</p>
//       </div>
//     </div>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };
// export default connect(mapStateToProps)(SideBar);
