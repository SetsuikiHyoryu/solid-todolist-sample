import { mergeProps, type Component } from 'solid-js'
import type { TodoItem as TodoItemInterface } from './type'
import styles from './styles.module.css'

interface Props {
  item: TodoItemInterface
}

const TodoItem: Component<Props> = (props) => {
  const merged = mergeProps<[Props, Props]>(
    { item: { content: 'placeholder', completed: false } },
    props,
  )

  return (
    <div class={styles.item}>
      <span classList={{ [styles.completed]: merged.item.completed }}>
        {merged.item.content}
      </span>

      <button class={styles.button}>✕</button>
    </div>
  )
}

export default TodoItem
