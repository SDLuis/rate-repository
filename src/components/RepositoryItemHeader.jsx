import React from 'react'
import { View } from 'react-native'
import theme from '../theme';
import StyledText from './StyledText';

export default function RepositoryItemHeader({ fullName, description, language }) {
  return (
    <View>
      <StyledText fontWeight="bold" color="blue">{fullName}</StyledText>
      <StyledText>{description}</StyledText>
      <StyledText style={Style.language}>{language}</StyledText>
    </View>
  )
}

const Style = StyleSheet.create({
  language: {
    padding: 4,
    alignSelf: 'flex-start',
    color: theme.colors.white,
    backgroundColor: theme.colors.textSecondary,
    borderRadius: 4,
    overflow: 'hidden',
  },
});
