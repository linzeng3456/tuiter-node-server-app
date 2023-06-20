import tuitsModel from './tuits-model.js';
export const findTuits = () => {

  console.log("----tuitsModel======")
  console.log(tuitsModel)
  return tuitsModel.find();
}
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})