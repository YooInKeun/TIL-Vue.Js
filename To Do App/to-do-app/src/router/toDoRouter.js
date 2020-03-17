import ToDoListView from '../../views/todo/ToDoListView.vue'
import ToDoAddView from '../../views/todo/ToDoAddView.vue'
import ToDoUpdateView from '../../views/todo/ToDoUpdateView.vue'

const toDoRoutes = [
    {
        path: '/',
        redirect: 'todo/list'
    },
    {
        path: '/todo/list',
        name: 'toDoList',
        component: ToDoListView
    },
    {
        path: '/todo/add',
        name: 'toDoAdd',
        component: ToDoAddView
    },
    {
        path: '/todo/update',
        name: 'toDoUpdate',
        component: ToDoUpdateView
    }
]

export { toDoRoutes };