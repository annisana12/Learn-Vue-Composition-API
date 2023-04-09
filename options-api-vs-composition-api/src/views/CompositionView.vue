<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{ todosCount }} todos!</h3>
    <div>
      <input v-model="data.newTodoName" @keyup.enter="addTodo" placeholder="Add Todo" type="text">
    </div>
    <div>
      <ul>
        <li v-for="todo in data.todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue';

export default {
  setup() {
    // let newTodoName = ref('')
    // let todos = ref([])

    let data = reactive({
      newTodoName: '',
      todos: []
    })

    const swearwords = ['fart', 'butt hair', 'willy']

    let todosCount = computed(() => {
      return data.todos.length
    })

    function addTodo() {
      // using ref
      // const newTodo = {
      //   id: Date.now(),
      //   name: newTodoName.value
      // }

      // todos.value = [...todos.value, newTodo]
      // newTodoName.value = ''

      // using reactive method
      const newTodo = {
        id: Date.now(),
        name: data.newTodoName
      }

      data.todos = [...data.todos, newTodo]
      data.newTodoName = ''
    }

    function deleteTodo(id) {
      // using ref
      // const newTodo = todos.value.filter(todo => todo.id !== id)
      // todos.value = [...newTodo]

      // using reactive method
      const newTodo = data.todos.filter(todo => todo.id !== id)
      data.todos = [...newTodo]
    }

    watch(data, (newValue) => {
      if (swearwords.includes(newValue.newTodoName.toLowerCase())) {
        alert('You must NEVER say ' + newValue.newTodoName + '!!')
        data.newTodoName = ''
      }
    })

    return {
      // newTodoName,
      // todos,

      data,

      todosCount,

      addTodo,
      deleteTodo
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
