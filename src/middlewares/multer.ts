import multer from 'multer';

const csvFilter = (_:any, file: any, cb: any) => {
  if (file.mimetype.includes('csv')) {
    cb(null, true);
  } else {
    cb('Please upload only csv file.', false);
  }
};

const storage = multer.memoryStorage();

export const FileUpload:any = multer({ storage, fileFilter: csvFilter }).single('file');
