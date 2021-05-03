'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassifiedLevel2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClassifiedLevel2.init({
    classifiedId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    effective: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassifiedLevel2',
  });
  ClassifiedLevel2.associate = function(models) {
    models.ClassifiedLevel2.belongsTo(models.Classified);
  };
  return ClassifiedLevel2;
};

