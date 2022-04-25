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
