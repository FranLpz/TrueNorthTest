'use strict';
    // Include our "db"
    const { pick } = require("lodash");
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const db = require("../../models/index.js");
    const Restaurants = db.Restaurant;
    const Review = db.Review;

    //GET /all restaurants operationId
    function getAll(req, res, next) {
        const { min, max } = req.swagger.params;
        Restaurants.findAll({
            /*include: [
                { model: Review, required: true}
            ],*/
            where: {
                rating: {
                    [Op.between]: [min.value, max.value],
                }
              }
        }).then ( response =>{
            res.json(response);
        });
    }

    function getById(req, res, next) {
        const id = req.swagger.params.id.value;
        Restaurants.findOne({
            where: { id }
        }).then ( response =>{
            if(response){
                res.json(response);
            }else{
                res.json('Not found');
            }
        });
    }
    
    function updateRestaurant(req, res, next) {
        const id = req.swagger.params.id.value;    
        
        const toUpdate = pick(req.body, [
            "logo",
            "comercialName",
            "legalName",
            "commercialEmail",
            "adminNumber",
            "address",
            "Location"
        ]);
        
        Restaurants.update(
            toUpdate,
            { where: { id } }
        ).then(
            restaurant => {
                res.json({success:1, description:'Success'});
            }, error => {
                console.log(error);
                res.json("Something went wrong");
            }
        );
    };

    function removeRestaurant(req, res, next) {
        const id = req.swagger.params.id.value;
        console.log(id)
        Restaurants.destroy({
            where: { id }
        }).then(result => {
            if(result){
                res.json({success:1, description:'Success'});
            }else{
                res.json({success:0, description:"Can't delete id "+id});                
            }
        }, err => {
            console.log(err)
            res.json({success:0, description:"Can't delete id "+id});  
        }).catch( err => {
            res.json({message:'Error ',err});
        });
    };

    module.exports = {
        getAll,
        getById,
        updateRestaurant,
        removeRestaurant
    };