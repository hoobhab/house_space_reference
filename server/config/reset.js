import { pool } from './database.js'
import './dotenv.js'
import roomData from '../data/rooms.js'

const createRoomsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF TABLE EXISTS rooms;

        CREATE TABLE IF NOT EXISTS rooms (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            purpose VARCHAR(255) NOT NULL,
            furniture VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery);
        console.log("Rooms table created successfully.")
    } catch (err) {
        console.error("⚠️ Error creating rooms table ⚠️", err)
    }
}

const seedRoomsTable = async () => {
    await createRoomsTable();

    roomData.forEach((room) => {
        const insertQuery = {
            text: "INSERT INTO rooms (name, purpose, furniture) VALUES ($1, $2, $3)"
        }

        const values = [
            room.name,
            room.purpose,
            room.furniture
        ]

    pool.query(insertQuery, values, (err, res) => {
        if (err) {
            console.error("⚠️ error inserting gift", err)
            return
        }

        console.log(`✅ ${room.name} added successfully`)
    })
    })
}

seedRoomsTable();