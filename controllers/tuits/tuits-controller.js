import posts from "./tuits.js";
let tuits = posts;


const templateTuit = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 1,
}
const createTuit = (req, res) => {
  const newTuit = {
    ...req.body,
    ...templateTuit,
    _id: (new Date()).getTime(),
  }
  // const newTuit = req.body;
  // newTuit._id = (new Date()).getTime()+'';
  // newTuit.likes = 0;
  // newTuit.liked = false;
  // newTuit.topic = "Brain Injuries";
  // newTuit.username = "Neurolink";
  // newTuit.handle = "@neurolink";
  // newTuit.time = "3h";
  // newTuit.image = "spacex.png";
  // newTuit.title = "Neurolink fixes paralisis and blindness";
  // newTuit.replies = 345;
  // newTuit.retuits = 654;

  tuits.push(newTuit);
  res.json(tuits);
}
const findTuits  = (req, res) => {
  res.json(tuits);
}
const updateTuit = (req, res) => {
  const tuitId = req.params.tid;
  const updates = req.boby;
  const tuitIndex = tuits.findIndex((t) => t.id === tuitId);
  tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  res.sendStatus(200);
}
const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}