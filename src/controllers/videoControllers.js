export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete");
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const watch = (req, res) => res.render("watch");
export const showAll = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #3",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const upload = (req, res) => res.send("Upload");
