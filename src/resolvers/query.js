import { User, Speaker, /* Organization, */Series } from '../models/index.js'


export function user(parent, { id }) {
    return User.get(id)
}

export function speaker(parent, { id }) {
    return Speaker.gett(id)
}

export function speakers() {
    return Speaker.batchGet(id)
}

export function organization(parent, { id }) {
    return Organization.get(id)
}

export function organizations() {
    return Organization.batchGet(id)

}

export function serie(_, { id }) {
    return Series.get(id)
}

export function series() {
    return Series.batchGet()
}

// export function episode() { }

// export function episodes() { }