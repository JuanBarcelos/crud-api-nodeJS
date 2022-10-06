import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";

export class RoomControler {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    try {
      const newRoom = roomRepository.create({ name });

      await roomRepository.save(newRoom);

      return response.status(201).json(newRoom);

    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
