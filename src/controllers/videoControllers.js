export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete");
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const showAll = (req, res) => res.send("Homepage videos");
export const upload = (req, res) => res.send("Upload");
