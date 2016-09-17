import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});

router.get('/summoner', (req, res) => {
  res.send('Summoner Page');
});

export default router;
