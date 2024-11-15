import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation: any = useNavigation();

    const [fonstLoaded] = Font.useFonts({
        'Regular': require('../../components/assests/fonts/Poppins-Regular.ttf'),
        'SemiBold': require('../../components/assests/fonts/Poppins-SemiBold.ttf'),
        'Medium': require('../../components/assests/fonts/Poppins-Medium.ttf'),

    })

    if (!fonstLoaded) {
        return;
    }



    return (
        <View style={styles.container}>
            <Image source={require('../../components/assests/images/logo.png')} style={styles.logoImg} />
            <Image source={require('../../components/assests/images/man.png')} style={styles.manImg} />
            <Text style={styles.title}>Lorem Ispum Dollar.</Text>
            <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                 style={[styles.loginButtonWrapper, {backgroundColor: Colors.primary,}]}>
                    <Text style={styles.loginButtonTxt}>Login</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.loginButtonWrapper]} 
                onPress={() => navigation.navigate('SignUpScreen')}
                >
                <Text style={styles.SignUpButtonTxt}>Sign-up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding: 20
    },

    logoImg: {
        height: 40,
        width: 140,
        marginVertical: 30
    },

    manImg: {
        height: 231,
        width: 250,
        marginVertical: 30

    },

    title: {
        fontSize: 36,
        fontFamily: 'SemiBold',
        paddingHorizontal: 20,
        textAlign: 'center',
        color: Colors.primary,
        marginTop: 25
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.secondary,
        fontFamily: 'Medium',
        marginTop: 12,
      
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 50,
        borderWidth: 2,
        borderColor: Colors.primary,
        width: '95%',
        height: 60,
        borderRadius: 100
    },

    loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 98
    },
    loginButtonTxt: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: 'SemiBold',
       
    },
    SignUpButtonTxt: {
        fontSize: 18,
        fontFamily: 'SemiBold'
    },
})