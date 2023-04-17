/* eslint-disable react/style-prop-object */
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'
import Main from './src/components/Main';

export default function App() {
  const apolloClient = createApolloClient()
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
