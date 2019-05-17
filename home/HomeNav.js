import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import LinkCard from './LinkCard';
import {links} from "./HomeNav.json";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#F3F3F3'
    }
});

class HomeNav extends React.Component {
    static navigationOptions = {
        title: 'Stardew Valley Manager',
        headerStyle: {
            backgroundColor: '#0460f4'
        },
        headerTintColor: '#d1ba0e'
    };

    state = {
        links: []
    };

    componentDidMount() {
        this.setState({links});
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.state.links}
                renderItem={({item}) => <LinkCard navigate={this.props.navigation} link={item}/>}
                keyExtractor={item => item.id}
            />
        )
    }
}

export default HomeNav;
