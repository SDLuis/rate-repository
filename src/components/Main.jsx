import { View, Text } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <View>
            <Text>Sign In</Text>
          </View>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
}
