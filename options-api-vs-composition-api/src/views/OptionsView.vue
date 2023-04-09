<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{ todosCount }} todos!</h3>
    <div>
      <input v-model="newTodoName" @keyup.enter="addTodo" placeholder="Add Todo" type="text">
    </div>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodoName: '',
      todos: [
        {
          id: 1,
          name: "One"
        },
        {
          id: 2,
          name: "Two"
        },
        {
          id: 3,
          name: "Three"
        }
      ],
      swearwords: ['fart', 'butt hair', 'willy']
    }
  },
  computed: {
    todosCount () {
      return this.todos.length
    }
  },
  methods: {
    addTodo () {
      const newTodo = {
        id: Date.now(),
        name: this.newTodoName
      }

      this.todos = [...this.todos, newTodo]
      this.newTodoName = ''
    },
    deleteTodo (id) {
      const newTodo = this.todos.filter(todo => todo.id !== id)
      this.todos = [...newTodo]
    }
  },
  watch: {
    newTodoName (newValue) {
      if (this.swearwords.includes(newValue.toLowerCase())) {
        alert('You must NEVER say ' + newValue + '!!')
        this.newTodoName = ''
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  width: 300px;
  margin: 20px auto 0;
}

li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
}
</style>
