

//        .card
//           div
//             div.sum
//              div.bold
//              div
//             div.backers
//              div.bold
//              div
//             div.days-left
//              div.bold
//              div
//           progress


export default function SecondCard() {
    return(<div className="card">
        <div>
            <div className="sum">
                <h2 className="big">$89,914</h2>
                <div className="small">of $100,000 backed</div>
            </div>
            <hr/>
            <div className="backers">
                <h2 className="big">5,007</h2>
                <div className="small"> total backers</div>
            </div>
            <hr/>
            <div className="days-left">
                <h2 className="big">56</h2>
                <div className="small"> days left</div>
            </div>
        </div>
        <progress value="80" max="100"/>
    </div>);
}