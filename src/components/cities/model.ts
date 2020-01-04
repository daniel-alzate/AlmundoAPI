import { model } from 'mongoose';
import citiesSchema from './schema';
import { ICities } from '../../interfaces';

export default model<ICities>('cities', citiesSchema);