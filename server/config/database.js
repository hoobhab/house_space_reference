import pg from 'pg'

const config = {
    /**
     * Creates a PostgreSQL connection pool object so that the server can 
     * create new client connections as needed
     */
    
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
      rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)