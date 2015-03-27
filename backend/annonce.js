'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// Routing
var router = express.Router();
router.get('/', search);
router.post('/', create);
router.delete('/:id', destroy);


// Init model
var AnnonceSchema = new Schema({
    poste: String,
    entreprise: String,
    logo : String,
    experience: String,
    salaire : String,
    lieu : String,
    competences: [String]
});

var Annonce = mongoose.model('Annonce', AnnonceSchema);


module.exports = router;


////////////


// Get list of annonces
function search(req, res) {
    var searchText = req.query.search;

    var searchReq;
    if (searchText && searchText.length > 0) {
        var regexp = new RegExp(searchText, 'i');

        searchReq = {
            '$or': [
                { 'poste': regexp },
                { 'entreprise': regexp },
                { 'competences': regexp }
            ]
        };
    } else {
        searchReq = {};
    }

    Annonce.find(searchReq, function(err, annonces) {
        if (err) {
            return handleError(res, err);
        }

        return res.json(200, annonces);
    });
};


// Creates a new annonce in the DB.
function create(req, res) {
    Annonce.create(req.body, function(err, annonce) {
        if (err) {
            return handleError(res, err);
        }

        return res.json(201, annonce);
    });
};


// Deletes a article from the DB.
function destroy(req, res) {
    Annonce.findById(req.params.id, function(err, annonce) {
        if (err) {
            return handleError(res, err);
        }

        if (!annonce) {
            return res.send(404);
        }

        annonce.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }

            return res.send(204);
        });
    });
};
