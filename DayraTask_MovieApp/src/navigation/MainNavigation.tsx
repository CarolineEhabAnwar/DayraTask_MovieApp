import React, { FC, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack';

const MainNavigation: FC = () => {

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default MainNavigation;