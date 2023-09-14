import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import "dotenv/config";
import { UserModel, SellerModel } from "../models";
const { TOKEN_ENCRYPTION } = process.env;

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOKEN_ENCRYPTION,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const userAuth = await UserModel.findById(payload.id);
    
    if (userAuth) {
      return done(null, userAuth);
    }
    if (!userAuth) {
      const sellerAuth = await SellerModel.findById(payload.id)
      if (!sellerAuth) return done(null,false);
      return done(null,sellerAuth);
    }

    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});
