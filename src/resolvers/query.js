import userData from '../../data/user.json' assert {type: 'json'}
import speakerData from '../../data/speaker.json' assert {type: 'json'}
import organizationData from '../../data/organization.json' assert {type: 'json'}
import seriesData from '../../data/series.json' assert {type: 'json'}


export function user(parent, { id }) {
    return {
        "id": "1",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "gender": "male",
        "series": [1, 2],
        "created_at": "2022-01-01T00:00:00.000Z",
        "visibility": "public"
    }
}

export function speaker(parent, { id }) {
    return speakerData[id]
}

export function speakers() {
    return speakerData
}

export function organization(parent, { id }) {
    return organizationData[id - 1]
}

export function organizations() {
    return organizationData
}

export function serie(_, { id }) {
    return seriesData[id - 1]
}

export function series() {
    return seriesData
}

// export function episode() { }

// export function episodes() { }