import React from 'react';
import {StyleSheet} from 'react-native';
import {Header as BaseHeader,Body, Button, Icon, Left, Right, Title} from "native-base";

export default class Header extends React.Component {
    render() {
        return (
            <BaseHeader>
                <Left>
                    <Button transparent>
                        <Icon name="home"/>
                    </Button>
                </Left>
                <Body>
                    <Title>全部</Title>
                </Body>
                <Right/>
            </BaseHeader>
        );
    }
}

const styles = StyleSheet.create({});
