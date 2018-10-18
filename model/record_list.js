'use strict';

module.exports = (sequelize, DataTypes) => {
    
  const recordList = sequelize.define('record_list', {
    'id': {
        'type': DataTypes.BIGINT,
        'autoIncrement': true,
        'primaryKey': true,
        'allowNull': false,
        'field': 'id'
    },
    'filename': {
        'type': DataTypes.STRING(100),
        'allowNull': false,
        'defaultValue': '',
        'field': 'filename'
    },
    'basename': {
        'type': DataTypes.STRING(100),
        'allowNull': false,
        'field': 'basename'
    },
    'lastmod': {
        'type': DataTypes.STRING(100),
        'allowNull': false,
        'field': 'lastmod'
    },
    'size': {
        'type': DataTypes.INTEGER(11),
        'allowNull': true,
        'field': 'size'
    },
    'type': {
      'type': DataTypes.STRING(10),
      'allowNull': false,
      'field': 'type'
    },
    'mime': {
      'type': DataTypes.STRING(20),
      'allowNull': false,
      'defaultValue': '',
      'field': 'mime'
    },
    'timeStamp': {
      'type': 'TIMESTAMP',
      'allowNull': false,
      'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP'),
      'field': 'timeStamp'
    }
  }, 
  {
    'indexes': [{
      unique: true,
      'fields': ['id']
    }]
  });

  return recordList;
};