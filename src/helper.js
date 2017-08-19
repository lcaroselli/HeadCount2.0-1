
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

  compareDistrictAverages(location1, location2) {
    const upperLocation1 = location1.toUpperCase();
    const upperLocation2 = location2.toUpperCase();

    const average1 = this.findAverage(upperLocation1);
    const average2 = this.findAverage(upperLocation2);
    const comparedAverage = Math.round((average1 / average2) * 1000) /1000
    
    const result = {
      [upperLocation1]: average1,
      [upperLocation2]: average2,
      compared: comparedAverage
    }

    return result;
  }

  findAverage(district) {
   const districtData = this.findByName(district);
   const districtDataKeys = Object.keys(districtData.data);
   const districtAverage = districtDataKeys.reduce((acc, year) => {
    acc += districtData.data[year]
    return acc;
    }, 0)
  const totalAverage = Math.round((districtAverage / districtDataKeys.length) * 1000) /1000

  return totalAverage;
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
