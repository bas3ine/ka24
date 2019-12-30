module.exports = (sequelize, DataType) => {
  const user = sequelize.define('user', {
    username: {
      type: DataType.STRING(255)
    },
    password: {
      type: DataType.STRING(255)
    },
    nickName: {
      type: DataType.STRING(100)
    },
    email:{
      type: DataType.STRING(100)
    },
    role: {
      type: DataType.ENUM("admin", "user")
    }
  })

  user.associate = (models) => {
    user.hasMany(models.question_list, { foreignKey: 'user_id' })
  }

  return user
}
