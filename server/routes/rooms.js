import express from 'express'
import RoomsController from '../controllers/rooms.js'

const router = express.Router()

router.get('/', RoomsController.getRooms)

export default router