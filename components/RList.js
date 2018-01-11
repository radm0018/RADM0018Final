import React, {Component} from "react";
import { List } from "native-base";
import RItem from "./RItem";
import { connect } from "react-redux";

class RList extends Component {
    render() {

        const restaurants = this.props.restaurants.map((item) => {

            return (
                <RItem {...item} key={item.id}/>
            );
        });

        return (
            <List>
                {restaurants}
            </List>
        );
    }
}

function mapStateToProps(state){
    return {
        restaurants: state.restaurants
    };
}

export default connect(mapStateToProps)(RList);
