import express from "express"
import multer from "multer"
import {uploadFile} from '../controllers/fileController'

const router = express.Router();

const storage = multer.diskStorage({})

let upload = multer({
    storage
})

router.post('/upload', upload.single("myFile"), uploadFile)

export default router;