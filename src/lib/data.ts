import { SchoolId } from './types';
import { loadData, saveData } from './storage';
import * as springfieldData from '@/data/springfield/mock-data';
import * as greenValleyData from '@/data/green-valley/mock-data';
import * as royalHeritageData from '@/data/royal-heritage/mock-data';
import * as futureTechData from '@/data/future-tech/mock-data';

const dataSources: Record<SchoolId, any> = {
  'springfield': springfieldData,
  'green-valley': greenValleyData,
  'royal-heritage': royalHeritageData,
  'future-tech': futureTechData,
};

export const getSchoolData = (schoolId: SchoolId, entity: string) => {
  const source = dataSources[schoolId];
  const defaultData = source[entity];
  return loadData(schoolId, entity, defaultData);
};

export const setSchoolData = (schoolId: SchoolId, entity: string, data: any) => {
  saveData(schoolId, entity, data);
};

export const initializeSchoolData = (schoolId: SchoolId) => {
  const source = dataSources[schoolId];
  const entities = ['students', 'teachers', 'parents', 'events', 'gallery', 'news', 'fees', 'attendance', 'homework', 'exams', 'results'];
  
  entities.forEach(entity => {
    const existingData = loadData(schoolId, entity, null);
    if (!existingData) {
      saveData(schoolId, entity, source[entity]);
    }
  });
};
