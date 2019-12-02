# DynamoDB

Base de datos no relacional de AWS

# Verificar si existe o no la persona 

Cuando queremos verificar en la base de datos si existe o no la persona, y si existe no sobrescribila podemos implementar el codigo 
```js
ConditionExpression: 'attribute_not_exists(id)'
```
Para un completo ejemplo 

```js
const dynamodbParams = {
    TableName: process.env.DYNAMODB_TABLE_BLICKANALYTICS,
    Item: {
        id: userId,
        createdAt: timestamp
    },
    ConditionExpression: 'attribute_not_exists(id)'
};
dynamodb.putItem(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
}
```

Pero si queremos actualizar todo el objeto podemos implemetar la función

´´´js
const dynamodbParams = {
    TableName: process.env.DYNAMODB_TABLE_BLICKANALYTICS,
    Key: {id: userId},
    UpdateExpression: 'SET createdAt = if_not_exists(createdAt, :ca)',
    ExpressionAttributeValues: {
        ':ca': {'S': timestamp}
    }
};
dynamoDb.updateItem(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
}
´´´