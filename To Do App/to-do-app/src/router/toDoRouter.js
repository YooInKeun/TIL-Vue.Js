import ToDoListView from '../../views/todo/ToDoListView.vue'
import ToDoAddView from '../../views/todo/ToDoAddView.vue'

const toDoRoutes = [
    {
        path: '/',
        redirect: 'todo/list'
    },
    {
        path: '/todo/list',
        name: 'ToDoListView',
        component: ToDoListView
    },
    {
        path: '/todo/add',
        name: 'ToDoListView',
        component: ToDoAddView
    }
]

export { toDoRoutes };