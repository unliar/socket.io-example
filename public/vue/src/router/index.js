import Vue from 'vue'
import Router from 'vue-router'
import chatlist from '@/components/chatlist'
import userinfo from '@/components/userinfo'
import friendslist from '@/components/friendslist'
import chatwindow from '@/components/chatwindow'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'chatlist',
      component: chatlist
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/friendslist',
      name: 'friendslist',
      component: friendslist
    },
    {
      path: '/chatwindow',
      name: 'chatwindow',
      component: chatwindow

    }

  ]
})
