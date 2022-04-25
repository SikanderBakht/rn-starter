import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}>
                <Text
                    style={styles.textStyle}>Add a Color
                </Text>
            </TouchableOpacity>
            
            <FlatList
                 keyExtractor={colorItem => colorItem}
                data={colors}
                renderItem={({item}) => {
                    
                    return <View style={{ height: 100, width: 100, backgroundColor: item }}/> 
                }}>

            </FlatList>
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 10
    }
})


export default ColorScreen