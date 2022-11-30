import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from 'react-native';
import TodoItem from "./components/TodoItem"
import TodoInput from "./components/TodoInput"


export default function App() {

  const [isAddMode, setIsAddMode] = useState(false);

  const [taskArray, setTaskArray] = useState([]);

  const handleAddTodo = (enteredText) => {
    if (enteredText.length < 1) {
      return;
    }
    var task = {
      id: Math.random().toString(16).slice(-5),
      finished: false,
      description: enteredText
    }
    setTaskArray(tasks => [...tasks, task]);
    setIsAddMode(false);
  }

  const cancelTodoAdditionHandler = () => {
    setIsAddMode(false);
  }

  const renderTaskItem = ({ item }) => {
    return (
      <TodoItem
        item={item}
        onToggleFinish={toggleTask}
        onDelete={removeTaskHandler} />
    )
  }

  const removeTaskHandler = taskId => {
    setTaskArray(taskArray => taskArray.filter(task => task.id != taskId))
  }
  
  const toggleTask = taskId => {
    /* Never mutate state directly, can cause a lot of issues */
    let tmpArray = [...taskArray];
    for (var i in tmpArray) {
      if (tmpArray[i].id == taskId) {
        tmpArray[i].finished = !tmpArray[i].finished;
        break; // Stop this loop, we found it!
      }
    }
    setTaskArray(tmpArray);
  }
  


  return (
    <View style={styles.container}>
      {/* For simplification purpose we don't install SafeAreaView but use padding to make "fake" save SaveAreaView */}
      <Button title="Add New Task" color={"#2b9491"} onPress={() => setIsAddMode(true)} />
      <TodoInput
        visible={isAddMode}
        onAddTask={handleAddTodo}
        onCancel={cancelTodoAdditionHandler}
      />
      <FlatList
        renderItem={renderTaskItem}
        data={taskArray}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  
}



const styles = StyleSheet.create({
    container: {
      padding: 50,
    },
  });

  
