const expressJwt = require('express-jwt');
const userService = require('../services/users');

module.exports = jwt;

function jwt() {
    const secret = process.env.JWT_SECRET;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/authenticate',
            '/api/users/register',
            { url: '/api/games', methods: ['GET']  },
            { url: '/api/results', methods: ['GET']  },
            { url: '/api/users', methods: ['GET']  },
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