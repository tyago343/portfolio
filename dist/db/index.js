"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
(0, typeorm_1.createConnection)({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [User_1.User],
    synchronize: true,
    logging: false
})
    .then(function (connection) {
    console.log("estoy conectado perri.");
    var user = new User_1.User();
    user.name = "Santiago";
    user.lastName = "Casanova";
    user.userName = "tyago343";
    return connection.manager.save(user).then(function (photo) {
        console.log("Photo has been saved. Photo id is", photo.id);
    });
})
    .catch(function (err) { return console.log("ERROR ======>   " + err); });
//# sourceMappingURL=index.js.map