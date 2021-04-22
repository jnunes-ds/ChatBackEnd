
import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate{
    chat: boolean;
    username: string;
}

class SettingsService{
    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    private settingsRepository: Repository<Setting>

    async create({ chat, username }: ISettingsCreate){

        //Select * from settings where username = "username" limit 1
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyExists){
            throw new Error("Uset already exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username,
        });

        await this.settingsRepository.save(settings);

        return settings;
    }

}

export { SettingsService };