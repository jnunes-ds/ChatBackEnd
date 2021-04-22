
import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';


class UserService {
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    private usersRepository: Repository<User>

    async create(email: string){

        //Verify if user already exists

        const userExists = await this.usersRepository.findOne({
            email
        })

        // if !user, save them

        if(userExists){
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        // else, return user

        return user;
    }
}

export { UserService }