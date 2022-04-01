import 'reflect-metadata';
import 'dotenv/config';
import FakeUsersRepository from '@modules/users/domain/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import CreateSessionsService from '../CreateSessionsService';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let createSession: CreateSessionsService;
let fakeHashProvider: FakeHashProvider;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createSession = new CreateSessionsService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Eduardo Luiz',
      email: 'hello@eduardoluiz.dev',
      password: '1231234',
    });

    console.log('123123123');

    const response = await createSession.execute({
      email: 'hello@eduardoluiz.dev',
      password: '1231234',
    });

    console.log(response);

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existent user', async () => {
    expect(
      createSession.execute({
        email: 'hello@eduardoluiz.dev',
        password: '1231234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Eduardo Luiz',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(
      createSession.execute({
        email: 'hello@eduardoluiz.dev',
        password: '1231234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
