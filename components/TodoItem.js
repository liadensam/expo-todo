/*
 *  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                   ___
 *                  |  _|___ ___ ___
 *                  |  _|  _| -_| -_|  LICENCE
 *                  |_| |_| |___|___|
 *
 *   PROGRAMOVÁNÍ  <>  DESIGN  <>  PRÁCE/PODNIKÁNÍ  <>  HW A SW
 *
 * Tento zdrojový kód pochází z IT sociální sítě WWW.ITNETWORK.CZ
 *
 * Můžete ho upravovat a používat jak chcete, musíte však zmínit
 * odkaz na http://www.itnetwork.cz
 */


import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TodoItem = (props) => {
    return (
        <TouchableOpacity
            key={props.item.id}
            onPress={props.onToggleFinish.bind(this, props.item.id)}
            onLongPress={props.onDelete.bind(this, props.item.id)}
        >
            <View style={[styles.listItem, { backgroundColor: props.item.finished ? '#afa' : '#ccc' }]} >
                <Text>{props.item.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});