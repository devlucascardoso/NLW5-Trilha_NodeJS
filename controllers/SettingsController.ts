import { Request, Reponse } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {

  async create(request, reponse) {
    const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username,
  });
  
  await SettingsRepository.save(settings);

  return response.json(settings);
  }
}

export { SettingsController }