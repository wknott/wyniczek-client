const expressJwt = require('express-jwt');
const userService = require('../services/users');
const pathToRegexp = require('path-to-regexp');

module.exports = jwt;

function jwt() {
    const secret = process.env.JWT_SECRET;
    return expressJwt({ secret, algorithms: ['sha1', 'RS256', 'HS256'], isRevoked }).unless({
        path: [
            { url: /^\/api\/.*/, methods: ['GET'] },
            // public routes that don't require authentication
            '/api/users/authenticate',
            '/api/users/register',
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};