import fs from 'fs';
import csv from 'csv-parser';

export const parseCSV = (filePath, callback) => {
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', callback)
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
};
