'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  // const auth = app.middleware.auth();

  router.get('/', controller.home.index);
  router.get('/api/catalog', controller.catalog.list);

  router.get('/api/teacher', controller.teacher.list);
  router.get('/api/teacher/:id', controller.teacher.find);
  router.post('/api/teacher/token', controller.teacher.token);

  router.get('/api/admin', controller.admin.list);
  router.post('/api/admin/token', controller.admin.token);

  router.post('/api/auth/logout', controller.auth.logout);
}