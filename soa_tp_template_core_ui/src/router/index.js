import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

// SOA PAGES
const Accueil = () => import('@/views/SoaProject/Accueil')

/* // Facultes
const IndexFaculte = () => import('@/views/SoaProject/Faculte/IndexFaculte')
const AddFaculte = () => import('@/views/SoaProject/Faculte/AddFaculte')
const EditFaculte = () => import('@/views/SoaProject/Faculte/EditFaculte')
const DetailFaculte = () => import('@/views/SoaProject/Faculte/DetailFaculte')
 */
/* // Departements
const IndexDepartement = () => import('@/views/SoaProject/Departement/IndexDepartement')
const AddDepartement = () => import('@/views/SoaProject/Departement/AddDepartement')
const EditDepartement = () => import('@/views/SoaProject/Departement/EditDepartement')
const DetailDepartement = () => import('@/views/SoaProject/Departement/DetailDepartement')

// Classes
const IndexClasse = () => import('@/views/SoaProject/Classe/IndexClasse')
const AddClasse = () => import('@/views/SoaProject/Classe/AddClasse')
const EditClasse = () => import('@/views/SoaProject/Classe/EditClasse')
const DetailClasse = () => import('@/views/SoaProject/Classe/DetailClasse') */

// Promotions
const IndexPromotion = () => import('@/views/SoaProject/Promotion/IndexPromotion')
const AddPromotion = () => import('@/views/SoaProject/Promotion/AddPromotion')
const EditPromotion = () => import('@/views/SoaProject/Promotion/EditPromotion')
const DetailPromotion = () => import('@/views/SoaProject/Promotion/DetailPromotion')

// Etudiants
const IndexEtudiant = () => import('@/views/SoaProject/Etudiant/IndexEtudiant')
const AddEtudiant = () => import('@/views/SoaProject/Etudiant/AddEtudiant')
const EditEtudiant = () => import('@/views/SoaProject/Etudiant/EditEtudiant')
const DetailEtudiant = () => import('@/views/SoaProject/Etudiant/DetailEtudiant')



Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'accueil',
          name: 'accueil',
          component: Accueil
        },
        {
          path: 'faculte',
          name: 'Faculte',
          component: {
            render (c) { return c('router-view') }
          },
          /* children: [
            {
              path: '/faculte',
              name: 'All',
              component: IndexFaculte
            },
            {
              path: '/faculte/add',
              name: 'New',
              component: AddFaculte
            },
            {
              path: '/faculte/:id([0-9]+)/edit',
              name: 'Edit',
              component: EditFaculte
            },
            {
              path: '/faculte/:id([0-9]+)/detail',
              name: 'Detail',
              component: DetailFaculte
            }
          ] */
        },
        {
          path: '/etudiant',
          name: 'Etudiants',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            /* {
              path: '/departement',
              name: 'All departement',
              component: IndexDepartement
            },
            {
              path: '/departement/add',
              name: 'New departement',
              component: AddDepartement
            },
            {
              path: '/departement/:id([0-9]+)/edit',
              name: 'Edit departement',
              component: EditDepartement
            },
            {
              path: '/departement/:id([0-9]+)/detail',
              name: 'Detail departement',
              component: DetailDepartement
            },
            {
              path: '/classe',
              name: 'All faculte',
              component: IndexClasse
            },
            {
              path: '/classe/add',
              name: 'New faculte',
              component: AddClasse
            },
            {
              path: '/classe/:id([0-9]+)/edit',
              name: 'Edit faculte',
              component: EditClasse
            },
            {
              path: '/classe/:id([0-9]+)/detail',
              name: 'Detail faculte',
              component: DetailClasse
            }, */
            {
              path: '/promotion',
              name: 'All promotion',
              component: IndexPromotion
            },
            {
              path: '/promotion/add',
              name: 'New promotion',
              component: AddPromotion
            },
            {
              path: '/promotion/:id([0-9]+)/edit',
              name: 'Edit promotion',
              component: EditPromotion
            },
            {
              path: '/promotion/:id([0-9]+)/detail',
              name: 'Detail promotion',
              component: DetailPromotion
            },
            {
              path: '/etudiant',
              name: 'All etudiant',
              component: IndexEtudiant
            },
            {
              path: '/etudiant/add',
              name: 'New etudiant',
              component: AddEtudiant
            },
            {
              path: '/etudiant/:id([0-9]+)/edit',
              name: 'Edit etudiant',
              component: EditEtudiant
            },
            {
              path: '/etudiant/:id([0-9]+)/detail',
              name: 'Detail etudiant',
              component: DetailEtudiant
            },
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
