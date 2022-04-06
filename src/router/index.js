import { createRouter, createWebHistory } from 'vue-router'
import News from '@/components/News/News';
import EventsList from '@/components/EventsList/EventsList';
import UserProfile from '@/components/UserProfile/UserProfile';

const routes = [
  {
    path: '/',
    component: News,
    name: 'News',
  },
  {
    path: '/eventslist',
    component: EventsList,
    name: 'EventsList',
  },
  {
    path: '/userprofile',
    component: UserProfile,
    name: 'UserProfile',
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
