import {mongoose as mgs} from 'mongoose';
const cardSchema = mgs.Schema ({
		name: String,
		imgUrl: String,
	});

export default mgs.model('Cards', cardSchema);
