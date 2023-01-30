export * as Query from './query.js'
export * as Mutation from './mutation.js'
export * as User from './user.js'
export * as Speaker from './speaker.js'
export * as Series from './series.js'
export * as Episode from './episode.js'
export * as Organization from './organization.js'

export const PublisherRef = {
    __resolveType(obj, arg, next) {
        if (obj.gender) {
            return 'Speaker'
        }
        return "Organization"
    },
}