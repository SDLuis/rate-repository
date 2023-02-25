import { View } from 'react-native';
import StyledText from './StyledText';

function parseThousands(value) {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value);
}

export default function RepositoryStacks(props) {
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: 'space-around' }}
      key={props.id}
    >
      <View>
        <StyledText fontWeight="bold" align="center">{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold" align="center">{parseThousands(props.forksCount)}</StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold" align="center">{props.reviewCount}</StyledText>
        <StyledText align="center">Review Count</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold" align="center">{props.ratingAverage}</StyledText>
        <StyledText align="center">Rating Average</StyledText>
      </View>
    </View>
  );
}
