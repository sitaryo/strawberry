import React, {Component} from 'react';
import {Button, Text, View} from "native-base";

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
                <Button
                    onPress={
                        ()=>this.props
                            .navigation
                            .navigate('Find')
                    }
                >
                    <Text>Go to Find</Text>
                </Button>
            </View>
        );
    }
}

export default HomeScreen;
