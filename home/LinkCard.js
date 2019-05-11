import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
    }
});

export default function LinkCard({ link }) {
    return(
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{link.title}</Text>
            </View>
        </View>
    )
}

LinkCard.prototype = {
    link: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};