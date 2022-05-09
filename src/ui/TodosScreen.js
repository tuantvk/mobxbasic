import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';

// Components
import Add from './Add';
import Todos from './Todos';

import styles from './styles';

const TodosScreen = () => {
  const [state, setState] = React.useState(false);

  const changeState = () => setState(prev => !prev);

  const bg = state ? 'blue': 'red';

  return (
    <SafeAreaView style={[styles.safeAreaView, {backgroundColor: bg }]}>
      <View style={styles.container}>
        <Add />
        <Todos bg={bg} />
        <Button title="Change bg" onPress={changeState}/>
      </View>
    </SafeAreaView>
  );
};

export default TodosScreen;
