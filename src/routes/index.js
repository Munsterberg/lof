import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});

router.get('/summoner', (req, res) => {
  res.render('summoner', {title: 'Summoner Lookup'});
});

export default router;
