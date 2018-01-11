import React, {Component} from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import {Container, 
        Header, 
        Content, 
        Text, 
        Title, 
        Body, 
        Card, 
        CardItem} 
from "native-base";


class RInfo extends Component {

    render() {

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Title>{this.props.item.name}</Title>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Phone: {this.props.item.phone}</Text>
                            <Text>Distance: {(this.props.item.distance /1000).toFixed(2)} KM </Text>
                            <Text>Price: {this.props.item.price}</Text>
                            <Text>Rating: {this.props.item.rating}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.selectedItem
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getDetails : () => dispatch(actions.getRestaurantInfo(ownProps.id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RInfo);
