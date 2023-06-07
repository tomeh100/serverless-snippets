//write lambda function to insert data to elastic cache
//import aws sdk
const AWS = require('aws-sdk');
//import elasticache
const elasticache = new AWS.ElastiCache();
//create lambda function
exports.handler = async (event) => {
    //insert event value to elastic cache
    await elasticache.createCacheCluster({
        CacheClusterId: 'sample-cache-cluster',
        Engine: 'redis',
        NumCacheNodes: 1
    }}
}.promise();
    //return response
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    }

}
//create cache cluster
//create cache parameter group



