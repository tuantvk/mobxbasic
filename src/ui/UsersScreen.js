import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { observer } from 'mobx-react';

import styles from './styles';

import usersStore from '../logic/users_store';

const UsersScreen = () => {
  const fetchUsers = () => {
    let secrectkey = new Date().getTime();
    console.log('secrectkey', secrectkey);
    usersStore.fetchUsers({ secrectkey });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Button title="Fetch users" onPress={fetchUsers} />
      <Text style={styles.users}>{JSON.stringify(usersStore.users)}</Text>
    </SafeAreaView>
  );
};

export default observer(UsersScreen);
