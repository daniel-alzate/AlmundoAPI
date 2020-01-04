import { model } from 'mongoose';
import HotelsSchema from './schema';
import { IHotels } from '../../interfaces';

export default model<IHotels>('hotels', HotelsSchema);