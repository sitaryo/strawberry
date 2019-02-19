import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "native-base";

class Sidebar extends Component {
    render() {
        return (
            <View>
                <Text>sidebar</Text>
            </View>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
