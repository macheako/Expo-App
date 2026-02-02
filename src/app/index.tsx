import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const StyledSafeView = styled(SafeAreaView);

export default function Index() {
  return (
    //   <StyledSafeView style={{ flex: 1, backgroundColor: Themes.Dark.Colors.Background, alignItems: 'center'}}>
    <StyledSafeView className='grow center-content bg-[#fff]'>
        <View>
            <Text>Index Page</Text>
        </View>
      </StyledSafeView>
  );
}
