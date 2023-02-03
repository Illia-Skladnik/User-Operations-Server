import * as fs from 'fs/promises';
import * as path from 'path';

export const getAllUsers = async () => {
  const filePath = path.resolve('./', 'users.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData = JSON.parse(data);

  return parsedData;
};


