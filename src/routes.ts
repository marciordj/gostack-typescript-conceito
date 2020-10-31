import { Request, Response} from 'express';
import CreateUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    name: 'Marcio',
    email: 'lmarciorodriguesjunior@gmail.com',
    password: '1234',
    techs: ['Node', 'Javascript', 'PHP']
  });
  
  return response.json(user)
}