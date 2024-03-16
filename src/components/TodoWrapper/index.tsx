import type { TodoItem as TodoItemInterface } from '../TodoItem/type'
import { For, createSignal, type Component } from 'solid-js'
import styles from './styles.module.css'
import TodoItem from '../TodoItem'

const TodoWrapper: Component = () => {
  const [todos, setTodos] = createSignal<TodoItemInterface[]>([
    { content: 'Play with white thighhighs loli', completed: true },
    { content: 'Eat food', completed: false },
  ])

  return (
    <div class={styles.wrapper}>
      <h2>Todo List</h2>
      <For each={todos()}>{(todo) => <TodoItem item={todo} />}</For>
    </div>
  )
}

export default TodoWrapper
