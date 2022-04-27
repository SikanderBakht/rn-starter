import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}>
        <Text style={styles.text}>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Components')}>
        <Text style={styles.text}>Go to Components</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Image')}>
        <Text style={styles.text}>Go to Image Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.text}>Go to Counter Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Color')}>
        <Text style={styles.text}>Go to Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ColorSquare')}>
        <Text style={styles.text}>Go to Color Square Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Text')}>
        <Text style={styles.text}>Go to Text Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Box')}>
        <Text style={styles.text}>Go to Box Screen</Text>
      </TouchableOpacity>
    </View>
  );





};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 10
  },
});

export default HomeScreen;
