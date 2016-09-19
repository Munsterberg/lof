import {Router} from 'express';
import request from 'request';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});

router.route('/summoner')
  .get((req, res) => {
    res.render('summoner/summoner', {title: 'Summoner Lookup'});
  })
  .post((req, res) => {
    const apiKey = 'c90e16ea-74ce-4e96-8a3b-d8a4ba3449fa';
    const summoner = req.body.summoner.toLowerCase().replace(/\s+/g, '');
    const summonerUrl = `https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summoner}?api_key=${apiKey}`; // eslint-disable-line

    request(summonerUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const summonerInfo = JSON.parse(body);
        const summonerObj = summonerInfo[summoner];
        res.render('summoner/player', {summonerInfo: summonerObj, title: summonerObj.name});
      } else {
        console.log('A summoner was not found!');
        res.redirect('/summoner');
      }
    });
  });

export default router;
