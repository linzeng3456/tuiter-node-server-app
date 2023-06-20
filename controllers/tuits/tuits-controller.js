// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

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
const createTuit = async (req, res) => {
  const newTuit = {
    ...req.body,
    ...templateTuit,
    // _id: (new Date()).getTime(),
  }
  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}
const updateTuit = async (req, res) => {
  const tuitId = req.params.tid;
  const updates = req.boby;
  // const tuitIndex = tuits.findIndex((t) => t.id === tuitId);
  // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
}
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  // tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}