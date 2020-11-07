import { container } from 'tsyringe';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

import ICitiesRepository from '@modules/locations/repositories/ICitiesRepository';
import CitiesRepository from '@modules/locations/infra/typeorm/repositories/CitiesRepository';

import IStatesRepository from '@modules/locations/repositories/IStatesRepository';
import StatesRepository from '@modules/locations/infra/typeorm/repositories/StatesRepository';

container.registerSingleton<INotificationsRepository>('NotificationsRepository', NotificationsRepository);
container.registerSingleton<ICitiesRepository>('CitiesRepository', CitiesRepository);
container.registerSingleton<IStatesRepository>('StatesRepository', StatesRepository);