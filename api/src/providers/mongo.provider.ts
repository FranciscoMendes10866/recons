import monk from 'monk'

const { DATABASE_URL } = process.env

const db = monk(DATABASE_URL)

export const locations = db.get('locations')
