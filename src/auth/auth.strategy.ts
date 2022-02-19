import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";

export class AuthStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService
        ){
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: "12345",

            })
        }
        
        async validate(payload: any) {
            return payload;
        }

}