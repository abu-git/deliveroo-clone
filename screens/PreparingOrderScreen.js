import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])

    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/food4.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="w-60 h-60"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen