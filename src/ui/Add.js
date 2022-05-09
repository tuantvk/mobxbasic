import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { observer } from 'mobx-react';

import styles from './styles';

import todosStore from '../logic/todos_store';

const Add = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title?.trim()?.length) {
      todosStore.addTodo({ title: title?.trim() });
      setTitle('');
    }
  };

  const onChangeText = text => {
    setTitle(text);
  };

  return (
    <View>
      <TextInput
        value={title}
        placeholder="Title"
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={handleSubmit}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default observer(Add);
