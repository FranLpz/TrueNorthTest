'use strict';
module.exports = reviewModel;

function reviewModel(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    name: DataTypes.TEXT,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Review.belongsTo(models.Restaurant);        
      }
    },
    hooks: {
      //afterCreate: calculateRating
    }
  });
  return Review;
};

function calculateRating(review, opts, done) {
  console.log('ok ', review.restaurantId)
  const Restaurant = require("./restaurant");
  console.log(Restaurant);
  //const Review = reviewModel;
//{ rating: sequelize.literal(`((rating*${totalReviews-1}) + ${rating})/${totalReviews}`) }
  Restaurant.findOne().then(restaurant => {
    console.log(restaurant);
    /*restaurant.update({
      rating: ((restaurant.rating * restaurant.Reviews.length-1) + review.rating)/restaurant.Reviews.length
    }).then(done());*/
  });

}