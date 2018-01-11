import React, {Component} from "react";
import RList from "./RList";
import RInfo from "./RInfo";
import * as actions from "../actions";
import {connect} from "react-redux";
import {RESTAURANT_LIST, RESTAURANT_INFO, RESTAURANT_LOAD} from "../Pages";
import {
    Container, 
    Header, 
    Title, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Body, 
    Text, 
    Left, 
    Icon, 
    Right, 
    Spinner
} from "native-base";


class Main extends Component {
    render() {

        let return_btn;
        let body;

        switch (this.props.page) {

            case RESTAURANT_INFO:

                return_btn = (
                    <Content>
                        <Button full primary onPress={this.props.returnToList}>
                            <Left>
                                <Icon name ="arrow-back" />
                            </Left>
                            <Text>Back to List</Text>
                        </Button>
                    </Content>
                );

                body = <RInfo/>;

                break;

            case RESTAURANT_LIST:

                body = (
                    <Content>
                        <Button full primary onPress={this.props.fetchData}>
                            <Text>Find restaurants near you!</Text>
                        </Button>

                        <RList/>
                    </Content>
                );

                break;

            case RESTAURANT_LOAD:
                body = <Spinner color='blue'/>;
                break;

            default:
                body = <Text>Error loading the app</Text>;

        }

        return (
            <Container>
                <Header>
                    <Left/>
                        <Body>
                        <Title>{this.props.selectedItem ? this.props.selectedItem.name :"Restaurant List"}</Title>
                        </Body>
                    <Right/>
                </Header>
                <Content>

                    {return_btn}

                    {body}

                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>&copy;2018 Ryan Radmore</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )   
    }   
}   

function mapStateToProps(state) {
    return {
        page: state.page,
        selectedItem: state.selectedItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(actions.getGeolocationList()),
        returnToList: () => dispatch(actions.backToList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);