import { parseCSV } from "./utils/csvParser.js";
import CardStatus from "./models/cardStatus.js";

// Callback function to process each row of the CSV
const processCSVRow = async (row,fileType) => {
  const { CardID, UserMobile } = row;

  let status;
  // Determine status based on file type
  switch (fileType) {
    case 'pickup':
      status = 'picked_up';
      break;
    case 'delivered':
      status = 'delivered';
      break;
    case 'returned':
      status = 'returned';
      break;
    default:
      status = 'unknown';
  }

  const existingCard = await CardStatus.findOne({ CardID });
  if (existingCard) {
    await CardStatus.findOneAndUpdate({ CardID }, { status });
  } else {
    await CardStatus.create({
      CardID,
      UserMobile,
      status,
    });
  }
  console.log(row);
};

export const updatedatabase = async(filePath,fileType) => {
  parseCSV(filePath, (row) => processCSVRow(row, fileType));
};
