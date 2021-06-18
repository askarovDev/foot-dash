export default function () {

  this.namespace = '';    // make this `/api`, for example, if your API is namespaced

  this.get('/subscribers');
  this.post('/subscribers');
  this.get('/subscribers/:id');
  this.patch('/subscribers/:id');
  this.del('/subscribers/:id');

  this.get('/payments');
  this.post('/payments');
  this.get('/payments/:id');
  this.patch('/payments/:id');
  this.del('/payments/:id');
  

}

