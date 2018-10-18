const fileManagerDB = require('../model/index').fileManagerDB;
const config = require('../config');
const fetchAll = (entity,condition) => {
    return fileManagerDB[entity].findAll(condition).then((data) => {
        if (!data || data.length <=0) return [];
        const length = data.length;
        const list = [];
        for(let i = 0; i < length; i++) {
            list.push(data[i].dataValues);
        }
        return list;
    }).catch((error) => {
        throw error;
    });
};
const fetch = (entity,condition) => {
    return fetchAll(entity,condition).then((dataList) => {
       if (!dataList || dataList.length <= 0) return null;
       return dataList[0]; 
    }).catch((error) => {
        throw error;
    });
};
const create = (entity, data, options) => {
    return fileManagerDB[entity].create(data, options)
        .then((data) => {
            if (!data || !data.dataValues) throw error;
                return data.dataValues;
        })
        .catch((error) => {
            throw error;
        });
};
const bulkCreate = (entity, data, options) => {
    console.log(entity);
    return fileManagerDB[entity].bulkCreate(data, options)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
  
const update = (entity, data, condition) => {
    return fileManagerDB[entity].update(data, condition)
    .then((data) => {
        if (!data) throw constants.message.DB_ERROR;
            return data;
    })
    .catch((error) => {
        throw error;
    });
};
  
const remove = (entity, condition) => {
    return fileManagerDB[entity].destroy(condition)
    .then(() => {
        return true;
    })
    .catch((error) => {
        throw error;
    });
};
module.exports = {
    fetchAll: fetchAll,
    fetch: fetch,
    create: create,
    bulkCreate: bulkCreate,
    update: update,
    remove: remove
};
