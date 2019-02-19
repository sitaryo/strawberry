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
import {Router,Route} from "react-router-native";
import Home from "../component/Home";
import Find from "../component/Find";
import Message from "../component/Message";

import myHistory from "../model/MyHistory";

export default class App extends React.Component {
    render() {
        return (
            <Router history={myHistory}>
                <Container>
                    {/*header*/}
                    <Header/>

                    {/*content*/}
                    <Content>
                        <Route exact path="/" component={Home} />
                        <Route path="/find" component={Find}/>
                        <Route path="/message" component={Message}/>
                    </Content>

                    {/*footer*/}
                    <Footer/>
                </Container>
            </Router>
        );
    }
}

const styles = StyleSheet.create({});
