import {Request, Response} from 'express';
import {User, users} from './user';
import * as jwt from 'jsonwebtoken';

export const handleAutentication = (req: Request, resp: Response) => {
  const user = req.body;
  if (isValid(user)) {
    const dbUser: User = users[user.email];
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, 'meat-api-password')
    resp.json({name: dbUser.name, email: dbUser.email, acessToken: token})
  } else {
    resp.status(403).json({message: 'Dados inválidos'})
  }
}

function isValid(user): boolean {
  if (!user) {
    return false;
  }
  const dbUser = users[user.email]
  return dbUser !== undefined && dbUser.matches(user)
}
