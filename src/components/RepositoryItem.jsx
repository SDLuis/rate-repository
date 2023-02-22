import { View, Text } from 'react-native';

export default function RepositoryItem(props) {
  return (
    <View style={{ padding: 10 }} key={props.id}>
      <Text>FullName: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Stars: {props.stargazersCount}</Text>
      <Text>Forks: {props.forksCount}</Text>
      <Text>Review Count: {props.reviewCount}</Text>
      <Text>Rating Average: {props.ratingAverage}</Text>
    </View>
  );
}
