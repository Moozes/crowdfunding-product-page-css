//             .product-card
//               .header
//                 h4
//                 span
//               .content
//                 p
//               .footer
//                 span
//                 button

export default function Product(props) {
    return(<div className="product-card">
        <div className="header">
            <h4>{props.info.title}</h4>
            <span className="price">Pledge ${props.info.price} or more</span>
        </div>
        <p className="content"> {props.info.discription} </p>
        <div className="footer">
            <h2> {props.info.left} <span className="left">left</span> </h2>
            {props.info.left !== "0" ? (
                <button className="btn-primary">Select Reward</button>
            ) : (
                <button className="btn-neutral" disabled>Out of stock</button>
            )}
        </div>
    </div>)
}