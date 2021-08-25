import React from 'react'
import { Text, View } from 'react-native'
import styles from './HomeStyle'


class HomeView extends React.Component {
    render = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello My Friend!</Text>
                <Text style={styles.title2}>How are you?</Text>

               
            </View>
        );
    }
}

export default HomeView;