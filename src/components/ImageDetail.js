import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource}></Image>
            <Text>{props.title}</Text>
            <Text>Image score - {props.score}</Text>
        </View>
        
    );
};

// const ImageDetail = (imageSource, title, score) => {
//     return (
//         <View>
//             <Image source={imageSource}></Image>
//             <Text>{title}</Text>
//             <Text>Image score - {score}</Text>
//         </View>    
//     );
// };

const syles = StyleSheet.create({});

export default ImageDetail