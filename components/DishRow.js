import { View, Text } from 'react-native'
import React from 'react'

const DishRow = ({id, name, description, price, image}) => {
    return (
        <View key={id}>
            <Text>DishRow</Text>
        </View>
    )
}

export default DishRow