import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import StyledText from './StyledText';
import theme from '../theme';

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
})

export default function AppBar() {
  return (
    <View style={Style.container}>
      <StyledText fontWeight="bold" style={Style.text}>Repositories</StyledText>
    </View>
  );
}
