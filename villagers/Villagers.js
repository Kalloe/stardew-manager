import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

class Villagers extends Component {
    handleAddPress = () => {

    };

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.handleAddPress}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Villagers;