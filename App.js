import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([]);
  
  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [ ...currentGoals, { id: Math.random().toString(), value: goal } ])
  }

  return (
    <View style={styles.screen}>
      <GoalInput 
        addGoalHandler={ addGoalHandler }
      />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem text={itemData.item.value}/> 
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});



