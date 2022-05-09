import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

import styles from './styles';

import todosStore from '../logic/todos_store';

const Card = ({ id, title, completed }) => {
  console.log('Card.title', title);

  const isCompleted = completed;
  // const isCompleted = computed(() => todosStore.isCompleted(id)).get();

  const changeStatus = () => {
    todosStore.changeStatus(id);
  };

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={[styles.cardTitle, isCompleted && styles.titleCompleted]}>
          {id}-{title}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.status, isCompleted ? styles.completed : styles.doing]}
        onPress={changeStatus}
      />
    </View>
  );
};

export default observer(Card);
