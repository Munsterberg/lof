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
  it('should return index page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        const actualBody = res.text;

        expect(actualBody).to.include('<h1>Index Page</h1>');
        done();
      });
  });
});

describe('GET /lookup', () => {
  it('should return summoner page', (done) => {
    request(app)
      .get('/lookup')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        const actualBody = res.text;

        expect(actualBody).to.include('<h1>Summoner Lookup</h1>');
        expect(actualBody).to.include('<form method="get" action="/summoner">');
        done();
      });
  });
});

describe('GET /summoner', () => {
  it('should return info about summoner', (done) => {
    request(app)
      .get('/summoner?summoner=Munsterberg&region=na')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        const actualBody = res.text;

        expect(actualBody).to.include('<h2>Munsterberg</h2>');
        expect(actualBody).to.include('<h3>30</h3>');
        done();
      });
  });
});
