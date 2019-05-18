import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default function LinkCard({link, navigate}) {
    return (
        <View style={styles.card}>
            <TouchableHighlight onPress={() => navigate.navigate(link.title)} style={styles.cardHeader}>
                <View style={styles.cardContainer}>
                    <Image
                        style={{width: 25, height: 25}}
                        source={{uri: link.image}}/>
                    <Text style={styles.title}>{link.title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

LinkCard.prototype = {
    link: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};