import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  blue: {
    color: theme.colors.primary,
  },
  big: {
    fontSize: theme.fontSizes.subheading,
  },
  small: {
    fontSize: theme.fontSizes.body,
  },
});

export default function StyledText({ blue, small, big, bold, children }) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    small && styles.small,
    big && styles.big,
    bold && styles.bold,
  ];

  return <Text style={textStyles}>{children}</Text>;
}
