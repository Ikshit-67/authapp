import mongoose, { connection } from 'mongoose';


export async function connect() {

    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("✅ Connection to DB successfull !");
        })

        connection.on('error', (err) => {
            console.log("⛔️ MONGO Connection error");
            console.log(err);
        })

    } catch (error) {
        console.log("⛔️ Unable to connect to DB");
        console.log(error);
    }

}
