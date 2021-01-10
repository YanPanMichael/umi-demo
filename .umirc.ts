import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // base: '/src/',
  // publicPath: '/static/aaa/bbb/',
  // hash: false,
  history: {
    type: 'hash',
  },
  dva: {},
  routes: [
    {path: '/', extra: true, conponent: '@/pages/index'},
    {
      path: '/users',
      conponent: '@/pages/users',
      routes: [
        {path: '/users/aaa', component: '@/pages/users/aaa', title: 'aaa'}
      ]
    },
    {path: '/dva', conponent: '@/pages/dva'},
  ]
});
