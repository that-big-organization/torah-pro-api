import speakerData from '../../data/speaker.json' assert {type: 'json'}

export function speakers({ speakers }) {
    const speakersData = speakerData.filter(element => speakers.includes(element.id))
    return speakersData
}