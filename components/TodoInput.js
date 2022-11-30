import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const TodoInput = (props) => {
    const [enteredTask, setEnteredTask] = useState("");
    

    const taskInputHandler = (enteredText) => {
        setEnteredTask(enteredText);
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Task description"
                    style={styles.input}
                    onChangeText={taskInputHandler}
                    value={enteredTask}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="#ae28b8" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" color="#2b9491" onPress={() => {
                            props.onAddTask(enteredTask);
                            setEnteredTask("")
                        }} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default TodoInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%',
    }
});