import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

export default function RepositoryList() {
  const { repositories } = useRepositories()
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    ></FlatList>
  );
}
