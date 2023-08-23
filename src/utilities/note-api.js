import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function getAll(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export function createNote(noteData) {
  return sendRequest(`${BASE_URL}`, 'POST', noteData );
}
