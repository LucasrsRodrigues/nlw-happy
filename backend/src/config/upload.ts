import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname,'..', '..', 'tmp');

export default  {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, cb) => {
      let name =file.originalname.replace('/[^a-z0-9]/gi', "");
       name = name.replace(' ', "-");

      const fileHash = crypto.randomBytes(10).toString('hex');

      const fileName = `${fileHash}-${name}`;

      return cb(null, fileName);
    }
  }),
}
