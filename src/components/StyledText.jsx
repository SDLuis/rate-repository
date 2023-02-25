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
  textAlignCenter: {
    textAlign: theme.alignText.center,
  },
});
export default function StyledText({ align, color, fontSize, fontWeight, children, style }) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'blue' && styles.blue,
    fontSize === 'small' && styles.small,
    fontSize === 'big' && styles.big,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return <Text style={textStyles}>{children}</Text>;
}
