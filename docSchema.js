//documentShema.js
import mongoose from 'mongoose';

const docSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
});

const Document = mongoose.model('Document', docSchema);

export default Document;
