export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete");
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const watch = (req, res) => res.render("watch");
export const showAll = (req, res) => res.render("home", { pageTitle: "Home" });
export const upload = (req, res) => res.send("Upload");
