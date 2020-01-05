import { model } from 'mongoose';
import HotelDetailSchema from './schema';
import { IHotelDetail } from '../../interfaces';

export default model<IHotelDetail>('details', HotelDetailSchema);