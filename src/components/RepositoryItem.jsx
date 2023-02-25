import { View, StyleSheet, Image } from 'react-native';
import RepositoryStacks from './RepositoryStacks';
import theme from '../theme';
import StyledText from './StyledText';

function RepositoryItemHeader({ fullName, description, language, ownerAvatarUrl }) {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={Style.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1, gap: 4 }}>
        <StyledText fontWeight="bold" color="blue">{fullName}</StyledText>
        <StyledText>{description}</StyledText>
        <StyledText style={Style.language}>{language}</StyledText>
      </View>
    </View>
  )
}
export default function RepositoryItem(props) {
  return (
    <View key={props.id} style={Style.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStacks {...props} />
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    padding: 14,
  },
  language: {
    padding: 4,
    alignSelf: 'flex-start',
    color: theme.colors.white,
    backgroundColor: theme.colors.textSecondary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
