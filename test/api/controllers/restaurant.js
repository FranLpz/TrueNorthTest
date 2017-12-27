var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('restaurant', function() {

    describe('GET /restaurant', function() {

        it('should return a default string', function(done) {
            request(server)
            .get('/restaurant')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
        });

        it('should receive a min integer', function(done) {
            request(server)
            .get('/restaurant')
            .query({ min: 3})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
            should.not.exist(err);
            done();
            });
        });

        it('should receive a max integer', function(done) {
            request(server)
                .get('/restaurant')
                .query({ max: 3})
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                should.not.exist(err);
                done();
                });
            });
        
        it('validate receive a valid max integer', function(done) {
            request(server)
                .get('/restaurant')
                .query({ max: 's'})
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400)
                .end(function(err, res) {
                should.not.exist(err);
                done();
                });
            });

    });

  });

});
