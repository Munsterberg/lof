/* eslint-disable */

import app from '../src/app';
import {expect} from 'chai';
import request from 'supertest';

describe('404 on nonexistent URL', () => {
  it('should return a 404 no url', (done) => {
    request(app)
      .get('/FailNoUrl')
      .expect(404)
      .expect('Content-Type', 'text/html; charset=utf-8', done)
  });
});

describe('GET /', () => {
  it('should return index', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        expect(res.text).to.include('<h1>Index Page</h1>');
        done();
      });
  });
});
