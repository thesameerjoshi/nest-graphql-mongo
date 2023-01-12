import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(401)
        .send({ error: 'Unauthorized  No Bearer Token Provided' });

    if (authorization === 'Bearer 1234567890') {
      next();
    } else {
      return res.status(401).send({ error: 'Unauthorized Wrong Token' });
    }
  }
}
