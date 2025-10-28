import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'

const _layout = () => {

    const isAuthenticated = true;

    if(!isAuthenticated) return <Redirect href='/signIn' />

  return <Slot/>
}

export default _layout