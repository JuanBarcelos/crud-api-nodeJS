import { Request, Response } from 'express';
import { roomRepository } from '../repositories/roomRepository';
import { subjectRepository } from '../repositories/subjctRepository';
import { videoRepository } from '../repositories/videoRepository';

export class RoomControler {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        try {
            const newRoom = roomRepository.create({ name });

            await roomRepository.save(newRoom);

            return response.status(201).json(newRoom);
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({ message: 'Internal Server Error' });
        }
    }

    async createVideo(request: Request, response: Response) {
        const { title, url } = request.body;
        const { idRoom } = request.params;

        try {
            const room = await roomRepository.findOneBy({ id: Number(idRoom) });

            if (!room) {
                return response
                    .status(404)
                    .json({ message: 'Aula nao encontrada' });
            }

            const newVideo = videoRepository.create({
                title,
                url,
                room,
            });

            await videoRepository.save(newVideo);

            return response.status(201).json(newVideo);
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({ message: 'Internal Server Error' });
        }
    }

    async roomSubject(request: Request, response: Response) {
        const { subject_id } = request.body;
        const { idRoom } = request.params;

        try {
            const room = await roomRepository.findOneBy({ id: Number(idRoom) });

            if (!room) {
                return response
                    .status(404)
                    .json({ message: 'Aula nao encontrada' });
            }

            const subject = await subjectRepository.findOneBy({
                id: Number(subject_id),
            });
            if (!subject) {
                return response
                    .status(404)
                    .json({ message: 'disciplina nao encontrada' });
            }
            const roomUpdate = {
                ...room,
                subjects: [subject],
            };
            await roomRepository.save(roomUpdate);

            return response.status(204).send();
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({ message: 'Internal Server Error' });
        }
    }

    async list(request: Request, response: Response) {
        try {
            const rooms = await roomRepository.find({
                relations: {
                    subjects: true,
                    videos: true
                }
            });

            return response.json(rooms)
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({ message: 'Internal Server Error' });
        }
    }
}
