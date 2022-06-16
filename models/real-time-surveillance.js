const BaseModel = require("./base/dynamo-db");
class RealTimeSurveillance extends BaseModel {
    tableName = "suicidepreventionindex";

    getByID(index, dateOfBirth, callback) {
        const params = {
            TableName: this.tableName,
            KeyConditionExpression: "#index = :index AND #date_of_birth = :date_of_birth",
            ExpressionAttributeNames: {
                "#date_of_birth": "date_of_birth",
                "#index": "index",
            },
            ExpressionAttributeValues: {
                ":date_of_birth": dateOfBirth,
                ":index": index,
            },
        };
        this.documentClient.query(params, callback);
    }
}

module.exports = RealTimeSurveillance;
