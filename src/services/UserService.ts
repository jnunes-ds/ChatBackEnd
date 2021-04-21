
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';


class UserService {
    async create(email: string){
        const usersRepository = getCustomRepository(UsersRepository);
        //Verify if user already exists

        const userExists = await usersRepository.findOne({
            email
        })

        // if !user, save them

        if(userExists){
            return userExists;
        }

        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        // else, return user

        return user;
    }
}

export { UserService }