import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

import SampleTurboModule from '@specs/NativeSampleModule';

const StyledSafeView = styled(SafeAreaView);

export default function Index() {
    const [value, setValue] = React.useState<string|null>("I'm a string");

    React.useEffect(() => {
        console.log('Connecting to scanner...');
        SampleTurboModule?.startScanner("192.168.1.211", 2368, "127.0.0.1", 2368);
    }, []);

    const onPress = () => {
        console.log('onPress');
        const scanResults = SampleTurboModule?.scan();
        setValue(String(scanResults));

        //const revString = SampleTurboModule?.reverseString(value);

        // const imabool = SampleTurboModule?.startScanner("192.168.1.211", 2368, "127.0.0.1", 2368);
        // setValue(imabool ? "TRUE" : "FUCK U");
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
