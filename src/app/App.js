/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, TextInput, TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchTodos, updateTodoInDB} from "../redux/actions";
import {styles} from './appStyles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  static defaultProps = {
    todos: [],
  };

  state = {
    newTodo: '',
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  onChangeTodo = (newTodo) => {
    this.setState({ newTodo });
  }

  onAddTodo = () => {
    const that = this;
    that.setState({ displayOptimisticUpdate: true });
    that.props.updateTodoInDB(that.state.newTodo, () => {
      that.setState({
        displayOptimisticUpdate: false,
        newTodo: '',
      });
    });
  }

  render() {
    const { newTodo } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.newTodoContainer}>
        <TextInput
          style={styles.newTodo}
          value={newTodo}
          onChangeText={this.onChangeTodo}
        />
          <TouchableOpacity style={styles.newTodoAdd} onPress={this.onAddTodo}>
            <Text>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          {this.state.displayOptimisticUpdate && <Text style={styles.todoItem}>{newTodo}</Text>}
          {this.props.todos.map((todo, i) => <Text style={styles.todoItem} key={i}>{todo.name}</Text>)}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todoList,
  loading: state.todos.loading,
});

export default connect(mapStateToProps, { fetchTodos, updateTodoInDB })(App);

