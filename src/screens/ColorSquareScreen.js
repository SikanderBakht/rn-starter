import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ColorController from '../components/ColorController'

const COLOR_INCREMENT = 15

const ColorSquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return (
        <View>
            <Text>
                Square Screen
            </Text>
            <ColorController
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                colorName="red" />
            <ColorController
                colorName="green"
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => setGreen(green - COLOR_INCREMENT)} />
            <ColorController
                colorName="blue"
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)} />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorSquareScreen