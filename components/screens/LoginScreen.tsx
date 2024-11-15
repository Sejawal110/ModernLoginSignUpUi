import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function LoginScreen() {

    const [secureEntry, setSecureEntry] = useState(true);

    const navigation: any = useNavigation();

    const [fonstLoaded] = Font.useFonts({
        'Regular': require('../../components/assests/fonts/Poppins-Regular.ttf'),
        'SemiBold': require('../../components/assests/fonts/Poppins-SemiBold.ttf'),
        'Medium': require('../../components/assests/fonts/Poppins-Medium.ttf'),
        'Light': require('../../components/assests/fonts/Poppins-Light.ttf'),
        'Bold': require('../../components/assests/fonts/Poppins-Bold.ttf'),

    })

    if (!fonstLoaded) {
        return;
    }




    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backIconWrapper}>
                <AntDesign name="arrowleft" size={30} color={Colors.primary} />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.headingTxt}>Hey,</Text>
                <Text style={styles.headingTxt}>Welcome</Text>
                <Text style={styles.headingTxt}>Back</Text>
            </View>


            <View style={styles.FormContainer}>
                <View style={styles.InputContainer}>
                    <Ionicons name="mail-outline" size={24} color={Colors.primary} />
                    <TextInput
                        placeholder='Enter your Email'
                        placeholderTextColor={Colors.secondary}
                        style={styles.inputStyles}
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.InputContainer}>
                    <AntDesign name="lock" size={24} color={Colors.primary} />
                    <TextInput
                        placeholder='********'
                        placeholderTextColor={Colors.secondary}
                        style={styles.inputStyles}
                       secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                    <AntDesign name="eyeo" size={24} color={Colors.primary} />
                    </TouchableOpacity>
                </View>

                 <TouchableOpacity>
                <Text style={styles.forgetTxt}>Forget Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButtonWrapper}>
                <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.orTxt}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source={require('../../components/assests/images/google.png')} style={styles.googleImage} />
                    <Text style={styles.goolrTxt}>Google</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <View style={styles.bottomAccountContainer}>
                    
                    <Text style={styles.accountTxt}>Don't have an account?</Text>
                    <Text style={styles.signTxt}>Sign up</Text>
                   
                </View>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 20,
        marginTop: 15

    },

    backIconWrapper: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textContainer: {
        marginVertical: 20,
    },

    headingTxt: {
        fontSize: 32,
        color: Colors.primary,
        fontFamily: 'SemiBold'
    },

    FormContainer: {
        marginTop: 20,
    },

    InputContainer: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },

    inputStyles: {
        flex: 1,
        paddingHorizontal: 12,
        fontFamily: 'Light',
        justifyContent: 'center',
        alignItems: 'center'
    },

    forgetTxt: {
        textAlign: 'right',
        color: Colors.primary,
        fontFamily: 'SemiBold',
        marginVertical: 10
    },

    loginButtonWrapper: {
        backgroundColor: Colors.primary,
        borderRadius: 100,
        marginTop: 20
    },
    loginTxt: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: 'SemiBold',
        textAlign: 'center',
        padding: 10
    },

    orTxt: {
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Regular',
        fontSize: 14,
        color: Colors.primary
    },

    googleButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 100,
        marginTop: 20
    },
    googleImage: {
        height: 20,
        width: 20
    },

    goolrTxt: {
        padding: 10,
        fontSize: 20,
        fontFamily: 'SemiBold',
        
    },

    bottomAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 5
    },

    accountTxt: {
        color: Colors.primary,
        fontFamily: 'Regular',
    },
    signTxt: {
        color: Colors.primary,
        fontFamily: 'Bold'
    },
})