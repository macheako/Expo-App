import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

import SampleTurboModule from '@specs/NativeSampleModule';

const StyledSafeView = styled(SafeAreaView);

export default function Index() {
    const [value, setValue] = React.useState<string|null>("I'm a string");

    const onPress = () => {
        const revString = SampleTurboModule?.reverseString(value);
        setValue(revString);
    };

  return (
    //   <StyledSafeView style={{ flex: 1, backgroundColor: Themes.Dark.Colors.Background, alignItems: 'center'}}>
    <StyledSafeView className='grow center-content bg-[#fff]'>
        <View className='flex-col'>
            <Text className='text-2xl text-center'>{value}</Text>
            <TouchableOpacity
                onPress={onPress}
                className='w-screen h-15 center-content bg-[#f00]'>
                <Text className='text-2xl'>Press Me</Text>
            </TouchableOpacity>
        </View>
      </StyledSafeView>
  );
}
