'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      "id": "880376925-0",
      "logo": "http://dummyimage.com/121x198.bmp/5fa2dd/ffffff",
      "comercialName": "Major Pharmaceuticals",
      "legalName": "Eyegate Pharmaceuticals, Inc.",
      "rating": 4.5,
      "commercialEmail": "cguiot0@amazon.co.jp",
      "adminNumber": "518-813-6569",
      "adress": "73 Vera Road",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "171260432-5",
      "logo": "http://dummyimage.com/188x146.jpg/5fa2dd/ffffff",
      "comercialName": "n/a",
      "legalName": "Scudder Strategic Municiple Income Trust",
      "rating": 4.9,
      "commercialEmail": "lcheetham1@ocn.ne.jp",
      "adminNumber": "176-461-0553",
      "adress": "6230 Merchant Road",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "653719766-X",
      "logo": "http://dummyimage.com/230x207.bmp/5fa2dd/ffffff",
      "comercialName": "Containers/Packaging",
      "legalName": "Ball Corporation",
      "rating": 2.7,
      "commercialEmail": "kalejandro2@privacy.gov.au",
      "adminNumber": "160-553-3934",
      "adress": "2 Lerdahl Circle",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "110280881-4",
      "logo": "http://dummyimage.com/182x221.jpg/cc0000/ffffff",
      "comercialName": "Electronic Components",
      "legalName": "Richardson Electronics, Ltd.",
      "rating": 4.6,
      "commercialEmail": "lscreech3@wunderground.com",
      "adminNumber": "112-762-7691",
      "adress": "78591 Forster Alley",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "731974155-5",
      "logo": "http://dummyimage.com/188x188.png/dddddd/000000",
      "comercialName": "n/a",
      "legalName": "Bank of America Corporation",
      "rating": 3.7,
      "commercialEmail": "ecoles4@shareasale.com",
      "adminNumber": "286-526-1525",
      "adress": "5680 Trailsway Circle",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "361340133-9",
      "logo": "http://dummyimage.com/127x186.jpg/ff4444/ffffff",
      "comercialName": "Major Banks",
      "legalName": "Citizens Financial Group, Inc.",
      "rating": 2.0,
      "commercialEmail": "cgallymore5@samsung.com",
      "adminNumber": "755-734-7894",
      "adress": "5767 Dakota Lane",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "712023743-8",
      "logo": "http://dummyimage.com/187x196.bmp/ff4444/ffffff",
      "comercialName": "Major Chemicals",
      "legalName": "Luxfer Holdings PLC",
      "rating": 3.7,
      "commercialEmail": "bstampfer6@cnn.com",
      "adminNumber": "423-284-4300",
      "adress": "450 Westend Plaza",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "008383385-4",
      "logo": "http://dummyimage.com/206x143.png/5fa2dd/ffffff",
      "comercialName": "Hospital/Nursing Management",
      "legalName": "Global Partner Acquisition Corp.",
      "rating": 2.3,
      "commercialEmail": "kriatt7@youtu.be",
      "adminNumber": "484-259-3188",
      "adress": "958 Killdeer Court",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "588770551-5",
      "logo": "http://dummyimage.com/231x124.bmp/ff4444/ffffff",
      "comercialName": "Computer Software: Prepackaged Software",
      "legalName": "Citrix Systems, Inc.",
      "rating": 2.5,
      "commercialEmail": "skellick8@biglobe.ne.jp",
      "adminNumber": "342-652-1283",
      "adress": "1 Rusk Park",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }, {
      "id": "904466166-3",
      "logo": "http://dummyimage.com/231x110.jpg/ff4444/ffffff",
      "comercialName": "Major Pharmaceuticals",
      "legalName": "Xenon Pharmaceuticals Inc.",
      "rating": 4.2,
      "commercialEmail": "mpolak9@bloglovin.com",
      "adminNumber": "607-756-8784",
      "adress": "9842 Old Gate Way",
      "Location": Sequelize.fn('ST_GeomFromText', 'POINT(50.871962 4.287370999999999)')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
