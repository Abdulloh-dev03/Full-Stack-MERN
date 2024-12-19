const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
require("colors");
dotenv.config();

// __dirname is already available, no need to define it again.
app.use(express.json());
app.use(express.urlencoded({extended: false}));
connectDB();

// Routes
app.use("/api/v1/product", require("./routes/product.routes"));

if (process.env.NODE_ENV === "production") {
    // Correct path to the 'client/dist' folder from the root of the project
    app.use(express.static(path.join(__dirname, "..", "client", "dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));
    });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`.bgBlue)
);
