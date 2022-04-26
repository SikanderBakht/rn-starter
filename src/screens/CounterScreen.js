import React, { useReducer } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const reducer = (state, action) => {
    return {...state, counter: state.counter + action.payload}
}

const CounterScreen = () => {
    //const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    dispatch({ type: 'increase', payload: 1 })
                    //setCounter(counter + 1)
                }}>
                <Text style={styles.textStyle}> Increase </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    dispatch({ type: 'decrease', payload: -1 })
                    //setCounter(counter - 1)
                }}>
                <Text style={styles.textStyle}> Deccrease </Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>
                Current Count: {state.counter}
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


// using use state

/*import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
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

export default CounterScreen*/