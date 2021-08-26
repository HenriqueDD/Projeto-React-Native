import React from 'react'
import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import styles from './HomeStyle'


const HomeView = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello My Friend! {props.count} </Text>
            <Text style={styles.title2}>How are you?</Text>
            <TouchableHighlight onPress={props.onPressed}>
                <View style={styles.viewButton}>
                    <Text>Touchable Highlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={props.onPressed}>
                <View style={styles.viewButton}>
                    <Text>Touchable Opacity </Text>
                </View>
            </TouchableOpacity >
            <TouchableWithoutFeedback onPress={props.onPressed}>
                <View style={styles.viewButton}>
                    <Text>Touchable Withoutfeedback</Text>
                </View>
            </TouchableWithoutFeedback>


        </View>
    );

}

export default HomeView;