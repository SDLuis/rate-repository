import { View } from 'react-native';
import Constants from 'expo-constants';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Main />
    </View>
  );
}
