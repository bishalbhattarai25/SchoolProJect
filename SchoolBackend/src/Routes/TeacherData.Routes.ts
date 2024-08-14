import * as express from 'express'
import { getTeacherData, postTeacherData } from '../controller/TeacherData.Controller';

const router = express.Router();

router.route('/TeacherData').get(getTeacherData).post(postTeacherData);

export default router;