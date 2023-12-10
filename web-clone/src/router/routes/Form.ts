export default [
    {
        path: '/form',
        name: 'Form',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Form.vue'),
    },
]
