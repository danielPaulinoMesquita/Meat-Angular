"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthorization = function (req, resp, next) {
    var token = extractToken(req);
    if (!token) {
        resp.setHeader('www-Authenticate', 'Bearer token_type="JWT"');
        resp.status(401).json({ message: 'Você precisa se autenticar.' });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                resp.status(403).json({ messages: 'Não autorizado.' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        // Authorization: bearer ZZZ. ZZZ zzz
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
