const ipServerWeb = "http://"+window.location.hostname+":4500";
module.exports = {
    ApiSetData:ipServerWeb + '/Report/Add'
  , ApiGetAllData:ipServerWeb + '/Report/GetAll'
};
