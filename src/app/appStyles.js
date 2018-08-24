/**
 * Created by Sahil on 8/24/18.
 */
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
  newTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newTodo: {
    height: 30,
    width: 60,
    flex:1,
    backgroundColor: '#eee',
    marginRight: 5,
  },
  newTodoAdd: {
    borderWidth: 1,
    padding: 5,
    height: 30,
    borderRadius: 5,
  },
  todoList: {
    marginTop: 10,
  },
  todoItem: {
    fontSize: 20,
    fontFamily: 'Helvetica',
  }
});