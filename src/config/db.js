import {neon} from '@neondatabase/serverless';
import "dotenv/config";

//Creates a SQL connection using our database URL
export const sql = neon(process.env.DATABASE_URL);


export async function initDB(){
    try{
        await sql`CREATE TABLE IF NOT EXISTS transactions(
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount NUMERIC(10,2) NOT NULL,
        category VARCHAR(10) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`

        console.log("Database Initialized Successfully")
    }catch(err){
        console.log("Erroe initializing the database",err);
        process.exit(1);
    }
}