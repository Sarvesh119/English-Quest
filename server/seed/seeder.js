import mongoose from 'mongoose';
import dotenv from 'dotenv';
import vocabularyData from './vocabularyData.js';
import { batch1 } from './batch1.js';
import moreVocabularyData from './moreVocabularyData.js';
import Vocabulary from '../models/Vocabulary.js';
import connectDB from '../config/db.js';

dotenv.config({ path: '../.env' });

connectDB();

const importData = async () => {
  try {
    await Vocabulary.deleteMany();

    // Combine all data
    const allData = [...vocabularyData, ...batch1, ...moreVocabularyData];

    // Filter duplicates based on 'word' (case-insensitive)
    const uniqueWords = new Set();
    const filteredData = allData.filter(item => {
      const lowerWord = item.word.toLowerCase();
      if (uniqueWords.has(lowerWord)) {
        return false;
      }
      uniqueWords.add(lowerWord);
      return true;
    });

    await Vocabulary.insertMany(filteredData);

    console.log(`Data Imported! Total entries: ${filteredData.length}`);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Vocabulary.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
