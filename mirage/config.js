export default function () {

  this.namespace = '';    // make this `/api`, for example, if your API is namespaced

  this.get('/subscribers', ({ subscribers }, { queryParams }) => {
    let search = queryParams.search;

    if (Object.keys(queryParams).length) {
      if (search) {
        return subscribers.where((s) => {
          return s.name.toLowerCase().includes(search);
        });
      } else {
        return subscribers.where(queryParams);
      }
    } else {
      return subscribers.all();
    }
  });
  this.post('/subscribers');
  this.get('/subscribers/:id');
  this.patch('/subscribers/:id');
  this.del('/subscribers/:id');

  this.get('/payments', ({ payments }, { queryParams }) => {
    let search = queryParams.search;

    if (Object.keys(queryParams).length) {
      if (search) {
        return payments.where((p) => {
          return p.name.toLowerCase().includes(search);
        });
      } else {
        return payments.where(queryParams);
      }
    } else {
      return payments.all();
    }
  });
  this.post('/payments');
  this.get('/payments/:id');
  this.patch('/payments/:id');
  this.del('/payments/:id');
  

}

