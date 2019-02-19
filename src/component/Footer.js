import React from "react";
import {StyleSheet} from "react-native";
import {Button, Footer as BaseFooter, FooterTab, Icon, Text} from "native-base";

import myHistory from "../model/MyHistory";

class Footer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <BaseFooter>
                <FooterTab>
                    <Button vertical onPress={this.handlePress.bind(this, '/')}>
                        <Icon name="apps"/>
                        <Text>首页</Text>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button vertical onPress={this.handlePress.bind(this, '/find')}>
                        <Icon name="navigate"/>
                        <Text>发现</Text>
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button vertical onPress={this.handlePress.bind(this, '/message')}>
                        <Icon name="person"/>
                        <Text>通知</Text>
                    </Button>
                </FooterTab>
            </BaseFooter>
        );
    }

    handlePress = (url) => {
        console.log(url);
        myHistory.push({pathname: url});
        console.log(this)
    };
}

const styles = StyleSheet.create({});

export default Footer;
