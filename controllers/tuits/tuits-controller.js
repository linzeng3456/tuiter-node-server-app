// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

const templateTuit = {
  "username": "NASA",
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
  console.log("----createTuit-------")
  console.log(newTuit)
  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  console.log(insertedTuit)
  res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  // console.log("======findTuits=====");
  // console.log(tuits);
  res.json(tuits);
}
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
}
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}