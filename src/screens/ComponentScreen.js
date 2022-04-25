import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    const name = 'Sikander';
    const greetings = <Text style={styles.subHeaderStyle}>My name is {name}</Text>;
    return <View>
        <Text style={styles.headingStyle}> Getting started with react native!</Text>
        {greetings}
    </View>
};

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen