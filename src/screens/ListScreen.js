import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend # 1', age: 'Age 15' },
        { name: 'Friend # 2', age: 'Age 20' },
        { name: 'Friend # 3', age: 'Age 45' },
        { name: 'Friend # 4', age: 'Age 55' },
        { name: 'Friend # 5', age: 'Age 34' },
        { name: 'Friend # 6', age: 'Age 36' },
        { name: 'Friend # 7', age: 'Age 56' },
        { name: 'Friend # 8', age: 'Age 23' },
        { name: 'Friend # 9', age: 'Age 15' }
    ];

    return (
        <FlatList
            horizontal={false}
            keyExtractor={(friendd) => friendd.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen