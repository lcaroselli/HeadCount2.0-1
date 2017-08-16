class DistrictRepository {
  constructor(data) {
    this.data = this.checkData(data)
  }

  checkData(rawData) {
    return rawData.reduce((acc, object) => {

      if(!acc[object.Location]) {
        acc[object.Location] = {location: object.Location.toUpperCase(), data:{} };
      }
      acc[object.Location].data[object.TimeFrame] = Math.round(1000 * object.Data) / 1000 || 0;
      return acc;

    }, {})
  }

  findByName(location = undefined) {
    if(location) {
      let keysArray = Object.keys(this.data)
      let found = keysArray.find(item =>  item.toUpperCase() === location.toUpperCase());

      return this.data[found];
    }
  }


  findAllMatches(string) {
    let keysArray = Object.keys(this.data)
    let fullData = keysArray.map(key => this.data[key]);

    if(string) {
      return fullData.filter(object =>
      object.location.startsWith(string.toUpperCase()))
    }

    return fullData;
  }


}


export default DistrictRepository;
