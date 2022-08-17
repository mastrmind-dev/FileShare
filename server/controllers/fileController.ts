export const uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "We need the file" });
    } else {
      console.log(req.file);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
};
