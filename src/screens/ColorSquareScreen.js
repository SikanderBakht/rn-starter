import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ColorController from '../components/ColorController'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    switch( action.type) {
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : {...state, red: state.red + action.payload}
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : {...state, green: state.green + action.payload}
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : {...state, blue: state.blue + action.payload}
        default:
            return state
    }
}


const ColorSquareScreen = () => {
    //#region use state
    /*const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
        }
    }
    return (
        <View>
            <Text>
                Square Screen
            </Text>
            <ColorController
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                colorName="red" />
            <ColorController
                colorName="green"
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} />
            <ColorController
                colorName="blue"
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
    */
    //#endregion

    //#region use reducer
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state

    return (
        <View>
            <Text>
                Square Screen
            </Text>
            <ColorController
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                colorName="red" />
            <ColorController
                colorName="green"
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})} />
            <ColorController
                colorName="blue"
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})} />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
    //#endregion

    
}



const styles = StyleSheet.create({

})

export default ColorSquareScreen