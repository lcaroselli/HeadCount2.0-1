export default class DistrictRepository {
  constructor(data) {
    this.data = this.checkData(data)
  }

  checkData(rawData) {
    return rawData.reduce((acc, object) => {

      if(!acc[object.Location]) {
        acc[object.Location] = {location: object.Location.toUpperCase(), data:{} };
      }
      acc[object.Location].data[object.TimeFrame] = object.Data;

      return acc;

    }, {})
  }

  findByName(location = undefined) {
    let keysArray = Object.keys(this.data)
    let found = keysArray.find(item => {
      return item === location;
    })

    return this.data[found]

  }


}
