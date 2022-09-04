module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/get_all_todos',
        destination: 'https://todo-list-test-demo.herokuapp.com/api/get_all_todos',
      },
      {
        source: '/api/get_time_left',
        destination: 'https://todo-list-test-demo.herokuapp.com/api/get_time_left',
      },
      {
        source: '/api/add_new_todo',
        destination: 'https://todo-list-test-demo.herokuapp.com/api/add_new_todo',
      },
      {
        source: '/api/get_todo',
        destination: 'https://todo-list-test-demo.herokuapp.com/api/get_todo',
      },
      {
        source: '/api/update_todo',
        destination: 'https://todo-list-test-demo.herokuapp.com/api/update_todo',
      },
      {
        source: '/api/delete_todo',
        destination: 'https://todo-list-test-demo.herokuapp.com/api/delete_todo',
      }
    ]
  },
}