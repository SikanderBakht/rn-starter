import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <TouchableOpacity
                onPress={() => { setCounter(counter + 1) }}>
                <Text style={styles.textStyle}> Increase </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { setCounter(counter - 1) }}>
                <Text style={styles.textStyle}> Deccrease </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>
                Current Count: {counter}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 10
    }
});

export default CounterScreen