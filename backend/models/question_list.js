module.exports = (sequelize, DataType) => {
  const question_list = sequelize.define('question_list', {
    questionName: {
      type: DataType.STRING(500)
    },
    difficulty:{
      type: DataType.STRING(500)
    }
  })

  question_list.associate = (models) => {
    question_list.hasMany(models.question, { foreignKey: 'question_list_id' })
    question_list.belongsTo(models.user, { foreignKey: 'user_id' })
  }
  return question_list
}
