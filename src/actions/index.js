import { FETCH_PEOPLE } from './types'

export function fetchPeople() {
  return {
    type: FETCH_PEOPLE,
    payload: [
      {
        name: 'Arip Hidayat',
        email : 'arip@hidayat.com'
      },
      {
        name: 'Alisiana Ulfah',
        email : 'alisiana@ulfah.com'
      }
    ]
  }
}
