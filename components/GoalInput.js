import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  } 
  return (
    <View style={styles.input}>
      <TextInput 
        placeholder="Add Goals" 
        style={styles.inputContainer} 
        onChangeText={inputHandler}  
        value={enteredGoal}
      />
      <Button title="ADD" onPress={ () => addGoalHandler(enteredGoal) }/>
    </View>  
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%", 
    borderColor: "lightgrey", 
    borderWidth: 1, 
    padding: 10 
  },
  input: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },
})