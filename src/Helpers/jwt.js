import {jwtVerify,SignJWT} from 'jose'


async function GenAccessToken(data){
    var token = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('20m')
    .setIssuedAt()
    .sign(new TextEncoder().encode("thisismysecretjwtkey0191290129029"));

    return token}


async function JWTVerify(token){
    try {
        var {payload} = await jwtVerify(token,new TextEncoder().encode("thisismysecretjwtkey0191290129029"))
        return payload

    } catch (error) {
        return false
    }

}

// ? Exporting The Token -------------------------------------------------/


export {GenAccessToken , JWTVerify}