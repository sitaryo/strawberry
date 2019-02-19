import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Button, Header as BaseHeader, Icon, Left, Right, Title} from "native-base";
import myHistory from "../model/MyHistory";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iconName: 'menu',
            title: '全部'
        };
    }

    componentDidMount() {

        // history 监听事件
        myHistory.listen((location) => {
            if (location.pathname === '/') {
                this.setState({
                    iconName: 'menu',
                    title: '全部'
                });
            }
            if (location.pathname === '/message') {
                this.setState({
                    iconName: 'menu',
                    title: '消息提醒'
                });
            }
            if (location.pathname === '/find') {
                this.setState({
                    iconName: 'menu',
                    title: '探索'
                })
            }
        });
    }


    render() {
        return (
            <BaseHeader>
                <Left>
                    <Button transparent onPerss={this.openSidebar}>
                        <Icon name={this.state.iconName}/>
                    </Button>
                </Left>
                <Body>
                <Title>{this.state.title}</Title>
                {/*{*/}
                {/*myHistory.location.pathname === '/'*/}
                {/*? (< transparent light iconRight><Title>{this.state.title}</Title><Icon name='arrow-down' /></>)*/}
                {/*: (<Title>{this.state.title}</Title>)*/}
                {/*}*/}
                </Body>
                <Right/>
            </BaseHeader>
        );
    }

    openSidebar = () => {
        // todo open sidebar
        console.log('show sidebar');
    }
}

const styles = StyleSheet.create({});
