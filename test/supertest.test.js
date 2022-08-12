const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

app.get('/v1/cadex', function(req, res) {
  res.status(200).json({ name: 'john' });
});



  // describe('GET /user', function() {
  //   it('responds with json', function(done) {
  //     request(app)
  //       .get('/user')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(200, done);
  //   });
  // });

  describe('GET /v1/cadex', function() {
    it('responds with json', async function() {
      const response = await request(app)
        .get('/v1/cadex')
        .set('Accept', 'application/json');

        // console.log(response);

        // on teste si le type du retour est du json
        expect(response.headers["Content-Type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
        
      //expect(response.body.email).toEqual('foo@bar.com');
    });
  });