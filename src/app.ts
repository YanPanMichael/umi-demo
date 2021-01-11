import dynamic from 'dva/dynamic';

const test = []
export function patchRoutes({routes}) {
  console.log(routes);
  
  test.forEach((r) => {
    routes.unshift({
      ...r,
      component: dynamic(() => {import(`@/${r.component}`)})
    })
  })
}

export function render(oldRender) {

  oldRender();
}