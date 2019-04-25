import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

class EventList extends Component {
    render() {
        return (
            <FlatList
                data={[{name: 'a'}, {name: 'b'}]}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

export default EventList;
