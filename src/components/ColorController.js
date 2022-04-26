import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ColorController = (props) => {
    return (
        <View>
            <Text>
                {props.colorName}
            </Text>
            <TouchableOpacity
                onPress={() => { { props.onIncrease() } }}>
                <Text style={styles.buttonStyle}> Increase {props.colorName}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { { props.onDecrease() } }}>
                <Text style={styles.buttonStyle}> Decrease {props.colorName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal: 10
    }
})

export default ColorController