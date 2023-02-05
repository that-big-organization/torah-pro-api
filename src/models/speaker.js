import dynamoose from 'dynamoose'

const schema = new dynamoose.Schema(
    {
        id: {
            type: String,
            get: value => `TP:S:${value}`,
            required: true,
            hashKey: true,
        },
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["male", "female"]
        },
        status: {
            type: String,
            enum: ["active", "inactive", "disabled", "deleted"],
            required: true,
            default: "active"
        },
        visibility: {
            type: String,
            enum: ["public", "private", "none"],
            default: "public"
        },
        verified: {
            type: Boolean,
            default: false,
            forceDefault: true
        }
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



export default dynamoose.model('Speaker', schema)