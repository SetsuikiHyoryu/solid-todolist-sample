import type { Component } from 'solid-js'

import TodoWrapper from './components/TodoWrapper'

import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <TodoWrapper />
      </header>
    </div>
  )
}

export default App
