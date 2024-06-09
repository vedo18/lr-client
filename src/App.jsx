import React from 'react';
import {useColorScheme, Text, View} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text>Learn Rhythm</Text>
    </View>
  );
}

export default App;
