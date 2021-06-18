/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import signin from '../views/signin/signin.jsx'
import signup from '../views/signup/signup.jsx'
import Alerts from '../views/ui-components/alert.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';


var ThemeRoutes = [
  {
    path: '/signin/signin',
    name: 'signin',
    icon: 'mdi mdi-sign-in-alt',
    component: signin
  },
  {
    path: '/signup/signup',
    name: 'signup',
    icon: 'mdi mdi-sign-in-alt',
    component: signup
  },
  {
    path: '/ui-components/layout',
    name: 'Layout',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },
  {
    path: '/ui-components/pagination',
    name: 'Pagination',

    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/ui-components/popover',
    name: 'Popover',

    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/card',
    name: 'Movies',
    icon: 'mdi mdi-credit-card-multiple',
    component: Cards
  },
  {
    path: '/ui-components/alert',
    name: 'Favorites',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/',
    pathTo: '/signin/signin',
    name: 'signin',
    redirect: true
  }
];
export default ThemeRoutes;
