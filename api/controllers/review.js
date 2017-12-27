'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const db = require("../../models/index.js");
const Review = db.Review;
const Restaurant = db.Restaurant;

function getReviews(req, res, next) {
    Review.findAll().then (response =>{
        res.json(response);
    });
}

function createReview(req, res, next) {
    const id = req.swagger.params.id.value; // restaurant id to add review
    const { name, review, rating } = req.body
    console.log('ID -> ',id)
    return Review.create({
        name,
        review,
        rating,
        restaurantId: id
    })/*.then(review => {
            return Review.count({
                where: { restaurantId: review.restaurantId }
            });
        }
    ).then(totalReviews => {
        console.log('count ', totalReviews);
            return Restaurant.update(
                { rating: sequelize.literal(`((rating*${totalReviews-1}) + ${rating})/${totalReviews}`) },
                { where: { id } }
            );
        }
    )*/.then( response => {
            console.log(`review successfully created`);
            res.json({success:1, description:'Review successfully created'});
        }
    ).catch( err => {
            res.json({message:'error'});
        }
    );

}

module.exports = {
    getReviews,
    createReview
};