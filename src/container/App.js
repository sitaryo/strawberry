/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Container, Content, Text} from "native-base";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default class App extends React.Component {
    render() {
        return (
            <Container>
                {/*header*/}
                <Header/>

                {/*content*/}
                <Content>
                    <Text>
                        this is content
                    </Text>
                </Content>

                {/*footer*/}
                <Footer/>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});
