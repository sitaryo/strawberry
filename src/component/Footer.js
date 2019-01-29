import React from "react";
import {StyleSheet} from "react-native";
import {Button, Footer as BaseFooter, FooterTab, Icon, Text} from "native-base";


export default class Footer extends React.Component {
    render() {
        return (
            <BaseFooter>
                <FooterTab>
                    <Button>
                        {/*<Text>主页</Text>*/}
                        <Icon name='arrow-back' />
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button>
                        {/*<Text>发现</Text>*/}
                        <Icon name='arrow-back' />
                    </Button>
                </FooterTab>
                <FooterTab>
                    <Button>
                        {/*<Text>通知</Text>*/}
                        <Icon name='arrow-back' />
                    </Button>
                </FooterTab>
            </BaseFooter>
        );
    }
}

const styles = StyleSheet.create({});
