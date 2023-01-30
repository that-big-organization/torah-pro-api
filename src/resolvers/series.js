// export function episodes(parent) {
//     console.log(parent)
//     return "31"
// }

export function publisher(parent) {
    return {
        id: "1",
        name: "Acme Corp",
        "created_at": "2022-01-01T00:00:00.000Z",
        speakers: [
            1,
            2,
            3
        ]
    }
}

export function speakers() {
    return {
        "id": 1,
        "name": "John Doe",
        "img": "https://example.com/speaker/1.jpg",
        "gender": "male",
        "url": "https://example.com/speaker/1",
        "created_at": "2022-01-01T00:00:00.000Z"
    }
}