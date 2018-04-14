'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.get('/api/catalog', controller.catalog.list);
  router.get('/api/teacher', controller.teacher.list);
  router.get('/api/teacher/:id', controller.teacher.find);
  router.get('/api/admin', controller.admin.list);
  router.post('/api/admin/token', controller.admin.token);
}