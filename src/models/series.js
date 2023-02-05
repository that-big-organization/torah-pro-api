import dynamoose from 'dynamoose'

const schema = new dynamoose.Schema(
    {
        id: {
            type: String,
            get: value => `TP:L:${value}`,
            required: true,
            hashKey: true,
        },
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
        },
        url: {
            type: String
        },
        publisher: {
            type: String,
            required: true
        },
        speakers: {
            type: Array,
            schema: [String]
        },
        visibility: {
            type: String,
            enum: ["public", "private", "none"],
            default: "public"
        },
    },
    {
        "timestamps": {
            "createdAt": {
                "created_at": {
                    "type": {
                        "value": Date,
                        "settings": {
                            "storage": "iso"
                        }
                    }
                }
            },
            "updatedAt": {
                "updated": {
                    "type": {
                        "value": Date,
                        "settings": {
                            "storage": "iso"
                        }
                    }
                }
            }
        }
    }
)



export default dynamoose.model('Series', schema)