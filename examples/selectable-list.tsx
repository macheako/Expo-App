import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [
      { rotate: '90deg' },
      { scaleX: 2.6 },
      { scaleY: 0.35 },
    ],
  },
});

export default App;


import React, { useRef, useEffect } from 'react';
import { Animated, Easing, View } from 'react-native';
// Use expo-image or react-native-fast-image for better GIF handling
import { Image } from 'expo-image'; 




const RotatingGif = ({ source }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  // This function starts the continuous rotation animation
  const spin = () => {
    spinValue.setValue(0); // Reset spin value to 0
    Animated.timing(spinValue, {
      toValue: 1, // Animate to 1
      duration: 3000, // Duration of one rotation (3 seconds)
      easing: Easing.linear,
      useNativeDriver: true, // Use native driver for performance
    }).start(() => spin()); // Loop the animation
  };

  useEffect(() => {
    spin();
  }, []);

  // Interpolate the 0 to 1 value to a 0deg to 360deg rotation
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <Image
        style={{ width: 200, height: 200 }}
        source={source}
        // For expo-image, autoplay is usually needed if it's a local asset
        autoplay 
        contentFit="contain"
      />
    </Animated.View>
  );
};



export default function App() {
  const localGif = require('./assets/your-gif-file.gif'); // Adjust path

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RotatingGif source={localGif} />
    </View>
  );
}
