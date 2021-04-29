const Env = use('Env')

module.exports = {
  //conexion fallida al cluster
  url: Env.get('MONGO_URL', 'mongodb+srv://m001-student:<password>@sandbox.rhjmf.mongodb.net/simple_training?retryWrites=true&w=majority'),
  host: Env.get('MONGO_HOST', 'localhost'),
  port: Env.get('MONGO_PORT', '27017'),
  user: Env.get('MONGO_USER', ''),
  pass: Env.get('MONGO_PASS', ''),
  db: Env.get('MONGO_DATABASE', '')
}
// NODE JS mongodb+srv://m001-student:<password>@sandbox.rhjmf.mongodb.net/simple_training?retryWrites=true&w=majority
// 'MONGO_USER', 'm001-student'
// 'MONGO_PASS', '2209'
// MONGO COMPAS mongodb+srv://m001-student:2209@sandbox.rhjmf.mongodb.net/test
//console  mongo "mongodb+srv://sandbox.rhjmf.mongodb.net/myFirstDatabase" --username m001-student
//2209

//conexion localhost
//  url: Env.get('MONGO_URL', ''),
//  host: Env.get('MONGO_HOST', 'localhost'),
//  port: Env.get('MONGO_PORT', '27017'),
//   user: Env.get('MONGO_USER', ''),
//  pass: Env.get('MONGO_PASS', ''),
//  db: Env.get('MONGO_DATABASE', '')

