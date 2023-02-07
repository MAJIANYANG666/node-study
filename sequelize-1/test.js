const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fang', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});
//创建User模型
class User extends Model {}
// 初始化user
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

async function run () {
  await User.destroy({
    where: {
      id: 2
    }
  })
  const users = await User.findAll();
  console.log(JSON.stringify(users));
  sequelize.close()
}
run()
//同步到数据库
// sequelize.sync()
//   //创建一条记录
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   // 打印结果
//   .then(jane => {
//     console.log(jane.toJSON());
//   });