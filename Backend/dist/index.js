"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const application_1 = require("./config/application");
const app = (0, express_1.default)();
//Middlewares
app.use(express_1.default.json());
const port = application_1.application.dev.port;
//base route
app.get("/", (req, res) => {
    try {
        return res.status(200).json({ message: "Welcome to the Backend" });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map