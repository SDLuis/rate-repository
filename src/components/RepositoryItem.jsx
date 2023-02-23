import { View } from 'react-native';
import StyledText from './StyledText';

export default function RepositoryItem(props) {
  return (
    <View style={{ padding: 10 }} key={props.id}>
      <StyledText blue bold>FullName: {props.fullName}</StyledText>
      <StyledText bold>Description: {props.description}</StyledText>
      <StyledText bold>Language: {props.language}</StyledText>
      <StyledText>Stars: {props.stargazersCount}</StyledText>
      <StyledText>Forks: {props.forksCount}</StyledText>
      <StyledText>Review Count: {props.reviewCount}</StyledText>
      <StyledText>Rating Average: {props.ratingAverage}</StyledText>
    </View>
  );
}
