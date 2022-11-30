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
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
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

  
