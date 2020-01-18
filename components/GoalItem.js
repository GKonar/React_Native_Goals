import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text>{ text }</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});
