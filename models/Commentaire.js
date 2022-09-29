const { DataTypes } = require('sequelize')
const db = require('./config')
// const { Category } = require('./Category')

const Commentaire = db.define('commentaire', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenue: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)
// Category.hasMany(Commentaire);
// Commentaire.belongsTo(Category);
module.exports = { Commentaire }