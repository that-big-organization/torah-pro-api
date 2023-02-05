import { v4 } from 'uuid'
import { User, Speaker, Series } from '../models/index.js'


export function createUser(parent, { input }) {
    return User.create({ ...input, id: v4() })
}

export function updateUser(parent, { input }) {
    return User.update(input)
}

export function deleteUser(parent, { id }) {
    return User.delete(id)
}

export function cretaeSpeaker(parent, { input }) {
    return Speaker.create({ ...input, id: v4() })
}

export function updateSpeaker(parent, { input }) {
    return Speaker.update(input)
}

export function deleteSpeaker(_, { id }) {
    return Speaker.delete(id)
}

export function createSeries(parent, { input }) {
    return Series.create({ ...input, id: v4() })
}

export function updateSeries(parent, { input }) {
    return Series.update(input)
}

export function deleteSeries(_, { id }) {
    return Speaker.delete(id)
}

// export function createEpisode() { }
// export function updateEpisode() { }
// export function deleteEpisode() { }