import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TodoItem = (props) => {
    return (
        <TouchableOpacity
            key={props.item.id}
            onPress={props.onToggleFinish.bind(this, props.item.id)}
            onLongPress={props.onDelete.bind(this, props.item.id)}
        >
            <View style={[styles.listItem, { backgroundColor: props.item.finished ? '#ae28b8' : '#fff' }]} >
                <Text style={{color: props.item.finished ? '#fff' : '#000'}} >{props.item.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1
    }
});