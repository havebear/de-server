// 'use strict';

// module.exports = app => {
//   const mongoose = app.mongoose;
//   console.log(mongoose);
//   const Schema = mongoose.Schema;

//   const TokenSchema = new Schema({
//     accessToken: {
//       type: String
//     },
//     expires: {
//       type: Date
//     }
//   });

//   return mongoose.model('Token', TokenSchema);
// }

// // {app_root}/app/controller/user.js
// exports.index = function* (ctx) {
//   ctx.body = yield ctx.model.Token.find({});
// }