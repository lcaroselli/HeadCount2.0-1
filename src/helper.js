export default class DistrictRepository {
  constructor(data) {
    this.data = this.checkData(data)
  }

  checkData(rawData) {
    return rawData.reduce((acc, object) => {

      if(!acc[object.Location]) {
        acc[object.Location] = [];
      }
      acc[object.Location].push(object);

      return acc;

    }, {})
  }
}
