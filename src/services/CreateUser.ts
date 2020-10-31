// interface ITechObjects {
//   title: string;
//   experience: number
// }

interface ICreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: string[]           //da pra faalar que é um array desses dois jeitos, tem mais ainda Array<string | ITechObjects>
}

export default function createUser({name, email, password}: ICreateUserData) {
  const user ={
    name,
    email,
    password
  }

  return user;
}