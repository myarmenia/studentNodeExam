import Jwt from "jsonwebtoken";

export const genRefreshToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email
    };
    try {
        const refreshToken = Jwt.sign(payload, process.env.REFRESH_TOKEN, {
            expiresIn: "7d"
        });
        return refreshToken;
    } catch (error) {
        console.error(error);
    }
};

export const genAccessToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email
    }

    try {
        const accessToken = Jwt.sign(payload, process.env.ACCESS_TOKEN, {
            expiresIn: "1h"
        })
        return accessToken
    } catch (error) {
        console.error(error);
    }
}


