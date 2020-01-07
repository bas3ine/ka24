module.exports = (sequelize, DataType) => {
  const score = sequelize.define('score', {
    score: {
      type: DataType.STRING(500)
    },
  })

  score.associate = (models) => {
    score.belongsTo(models.user, { foreignKey: 'user_id' })
  }
  return score
}
