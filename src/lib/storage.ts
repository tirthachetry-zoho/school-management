import { SchoolId } from './types';

const STORAGE_PREFIX = 'school:';

export const storageKey = (schoolId: SchoolId, entity: string) =>
  `${STORAGE_PREFIX}${schoolId}:${entity}`;

export function loadData<T>(schoolId: SchoolId, entity: string, defaultValue: T): T {
  try {
    const key = storageKey(schoolId, entity);
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Fall through to default
  }
  return defaultValue;
}

export function saveData<T>(schoolId: SchoolId, entity: string, data: T): void {
  try {
    const key = storageKey(schoolId, entity);
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save data:', error);
  }
}

export function clearSchoolData(schoolId: SchoolId): void {
  try {
    const prefix = storageKey(schoolId, '');
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
  } catch (error) {
    console.error('Failed to clear data:', error);
  }
}

export function getSession(schoolId: SchoolId) {
  try {
    const key = storageKey(schoolId, 'session');
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function setSession(schoolId: SchoolId, session: any): void {
  saveData(schoolId, 'session', session);
}

export function clearSession(schoolId: SchoolId): void {
  localStorage.removeItem(storageKey(schoolId, 'session'));
}