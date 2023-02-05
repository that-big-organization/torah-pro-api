import dynamoose from 'dynamoose'

const schema = new dynamoose.Schema(
    {
        id: {
            type: String,
            get: value => `TP:U:${value}`,
            required: true,
            hashKey: true,
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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



export default dynamoose.model('User', schema)