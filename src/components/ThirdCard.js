//         .card
//           h3
//           p
//           p
//           map -> <Product>
//             .product-card
//               .header
//                 h4
//                 span
//               .content
//                 p
//               .footer
//                 span
//                 button
import Product from '../components/Product';
const PRODUCTS = [
    {
        title : "Bamboo Stand",
        price : "25",
        discription : "  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left : "101",
    },
    {
        title : "Black Edition Stand",
        price : "75",
        discription : "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left : "64",
    },
    {
        title : "Mahogany Special Edition",
        price : "200",
        discription : "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left : "0",
    }
]

export default function ThirdCard() {
    return(<div className="card">
        <h3>About this project</h3>
        <p> 
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        {PRODUCTS.map((elm, index) => (
            <Product info={elm} key={index} />
        ))}
    </div>)
}