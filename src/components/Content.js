import {Component} from 'react';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';

export default class Content extends Component {
    render() {
        return(<div className="container-2">
            <FirstCard
                showModal={this.props.showModal}
            />
            <SecondCard/>
            <ThirdCard/>
        </div>)
    }
}