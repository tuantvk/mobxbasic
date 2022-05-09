import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: '90%',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  status: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  completed: {
    backgroundColor: '#00f514',
  },
  doing: {
    backgroundColor: '#faab2d',
  },
  users: {
    textAlign: 'center',
    fontSize: 16,
  },
});
