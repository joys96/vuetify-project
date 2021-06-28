import Vue from "vue"
import VueRouter from "vue-router"
// import Dashboard from "@/views/Dashboard"
// import GridSystem from "@/views/GridSystem"
// import GridListPage from "@/views/GridListPage"
// import Breakpoints from "@/views/Breakpoints"
// import Typography from "@/views/Typography"

// import Tables from "@/views/Tables"
// import Forms from "@/views/Forms"
// import Buttons from "@/views/Buttons"
// import Icons from "@/views/Icons"

// //import SignIn from "@/views/authentication/SignIn"
// //import SignUp from "@/views/authentication/SignUp"
// import ProductList from "@/views/page/ProductList"

// import DefaultLayout from "@/layouts/default/Index"
// import PageLayout from "@/layouts/page/Index"
// import AuthenticationLayout from "@/layouts/authentication/Index"






Vue.use(VueRouter) //뷰와 라우터를 연결 한다.

const routes = [{
        path: '/', //루트 페이지를 요청한다.
        component: () =>
            import (
                /* webpackChunkName: "layouts-default-index" */
                '@/layouts/default/Index'
            ),
        children: [{
                path: '/', //루트 페이지를 요청한다.
                name: 'Dashboard', //대시보드 컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-dashboard" */
                        '@/views/Dashboard'
                    )
            },

            {
                path: '/gird-system',
                name: 'GridSystem', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-grid-system" */
                        '@/views/GridSystem'
                    )
            },

            {
                path: '/gird-list-page',
                name: 'GridListPage', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-grid-list-page" */
                        '@/views/GridListPage'
                    )
            },

            {
                path: '/breakpoints',
                name: 'Breakpoints', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-breakpoints" */
                        '@/views/Breakpoints'
                    )
            },

            {
                path: '/tables/app-table',
                name: 'AppTables',
                component: () =>
                    import (
                        /* webpackChunkName: "views-app-tables" */
                        '@/views/table/AppTables'
                    )
            },
            {
                path: '/tables/basic-table',
                name: 'BasicTables',
                component: () =>
                    import (
                        /* webpackChunkName: "views-basic-tables" */
                        '@/views/table/BasicTables'
                    )
            },


            {
                path: '/typography',
                name: 'Typography', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-typography" */
                        '@/views/Typography'
                    )
            },
            {
                path: '/forms/validation-form',
                name: 'ValidationForm', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-validation-forms" */
                        '@/views/form/ValidationForms'
                    )
            }, {
                path: '/forms/app-form',
                name: 'AppForm',
                component: () =>
                    import (
                        /* webpackChunkName: "views-app-forms" */
                        '@/views/form/AppForms'
                    )
            },
            {
                path: '/buttons',
                name: 'Buttons', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-buttons" */
                        '@/views/Buttons'
                    )
            },
            {
                path: '/icons',
                name: 'Icons', //컴포넌트를 렌더링 한다.
                component: () =>
                    import (
                        /* webpackChunkName: "views-icons" */
                        '@/views/Icons'
                    )
            },
        ]
    },

    {
        path: '/authentication',
        component: () =>
            import (
                /* webpackChunkName: "layouts-authentication-index" */
                '@/layouts/authentication/Index'
            ),
        children: [{
            path: 'sign-in',
            name: 'SignIn', //컴포넌트를 렌더링 한다.
            component: () =>
                import (
                    /* webpackChunkName: "views-sign-in" */
                    '@/views/authentication/SignIn'
                )
        }, {
            path: 'sign-up',
            name: 'SignUp', //컴포넌트를 렌더링 한다.
            component: () =>
                import (
                    /* webpackChunkName: "views-sign-up" */
                    '@/views/authentication/SignUp'
                )
        }, ]
    },

    {
        path: '/page',
        component: () =>
            import (
                /* webpackChunkName: "layouts-page-index" */
                '@/layouts/page/Index'
            ),
        children: [{
            path: 'product-list',
            name: 'ProductList', //컴포넌트를 렌더링 한다.
            component: () =>
                import (
                    /* webpackChunkName: "views-product-list" */
                    '@/views/page/ProductList'
                )
        }, ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router