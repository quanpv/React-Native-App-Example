import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

class MenuItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MenuItemComponent;