const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const keys = require("./keys");

const s3 = aws.S3({
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.AWS_SECRET_KEY,
  Bucket: "ddprofileimage",
});

const fileUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ddprofileimage",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 3000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
})

function checkFileType(file, cb) {
  // Allowed ext
  //todo
  //add all the file types required for the app
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}


module.exports = fileUpload