module.exports = (sequelize, DataType) => {
    const question = sequelize.define('question', {
        ch1: {
            type: DataType.STRING(500)
        },
        ch2: {
            type: DataType.STRING(500)
        },
        ch3: {
            type: DataType.STRING(500)
        },
        ch4: {
            type: DataType.STRING(500)
        },
        answer: {
            type: DataType.STRING(500)
        },
    })

    return question
}
