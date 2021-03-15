import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; //if token length is more than 500 then it is from google auth

    let decodedData; //data from the token

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test"); //secret code should be same as mentioned in the controllers
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token); //from google so no need secret code
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
