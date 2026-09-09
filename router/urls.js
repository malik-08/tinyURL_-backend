import express from 'express';
import { RedirectURL } from '../controller/Redirect.js';
import { SaveURL } from '../controller/SaveURL.js';
 
const router = express.Router();

router.post("/saveurl",SaveURL);
router.get("/:shortId",RedirectURL);

export default router;
