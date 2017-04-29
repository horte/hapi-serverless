# Serverless setup running Hapi
A seed project for running Hapi using Serverless on AWS

## Resources
- https://hapijs.com/
- https://serverless.com/

## Run locally
 - Development is done locally.  
 - Uses serverless-offline plugin.  

`npm start`  

Visit `localhost:3000/ping` 

## Deploy
 - Deploys to AWS using your default profile (set AWS profile in serverless.yml).
 - Deploys will create a new CloudFormation stack with all necessary resources (e.g. s3, lambda, roles etc) handled by serverless.yml.  

`npm run deploy`

Output will look like below. Check your ServiceEndpoint at the end and go visit `https://xxxxxxxxxx.execute-api.eu-west-1.amazonaws.com/development/ping`

```
Serverless: Packaging service...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
CloudFormation - CREATE_IN_PROGRESS - AWS::CloudFormation::Stack - hapi-serverless-development
CloudFormation - CREATE_IN_PROGRESS - AWS::S3::Bucket - ServerlessDeploymentBucket
CloudFormation - CREATE_IN_PROGRESS - AWS::S3::Bucket - ServerlessDeploymentBucket
CloudFormation - CREATE_COMPLETE - AWS::S3::Bucket - ServerlessDeploymentBucket
CloudFormation - CREATE_COMPLETE - AWS::CloudFormation::Stack - hapi-serverless-development
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (16.51 MB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
CloudFormation - UPDATE_IN_PROGRESS - AWS::CloudFormation::Stack - hapi-serverless-development
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::RestApi - ApiGatewayRestApi
CloudFormation - CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
CloudFormation - CREATE_IN_PROGRESS - AWS::Logs::LogGroup - ApiLogGroup
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::RestApi - ApiGatewayRestApi
CloudFormation - CREATE_COMPLETE - AWS::ApiGateway::RestApi - ApiGatewayRestApi
CloudFormation - CREATE_IN_PROGRESS - AWS::Logs::LogGroup - ApiLogGroup
CloudFormation - CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
CloudFormation - CREATE_COMPLETE - AWS::Logs::LogGroup - ApiLogGroup
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Resource - ApiGatewayResourceProxyVar
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Resource - ApiGatewayResourceProxyVar
CloudFormation - CREATE_COMPLETE - AWS::ApiGateway::Resource - ApiGatewayResourceProxyVar
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Method - ApiGatewayMethodProxyVarOptions
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Method - ApiGatewayMethodProxyVarOptions
CloudFormation - CREATE_COMPLETE - AWS::ApiGateway::Method - ApiGatewayMethodProxyVarOptions
CloudFormation - CREATE_COMPLETE - AWS::IAM::Role - IamRoleLambdaExecution
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Function - ApiLambdaFunction
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Function - ApiLambdaFunction
CloudFormation - CREATE_COMPLETE - AWS::Lambda::Function - ApiLambdaFunction
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Version - ApiLambdaVersionrm53BJbtxgYZbfDeUWTFNfq8ae05RUunNVOEzZ9pXw
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Method - ApiGatewayMethodProxyVarAny
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Permission - ApiLambdaPermissionApiGateway
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Method - ApiGatewayMethodProxyVarAny
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Permission - ApiLambdaPermissionApiGateway
CloudFormation - CREATE_COMPLETE - AWS::ApiGateway::Method - ApiGatewayMethodProxyVarAny
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Version - ApiLambdaVersionrm53BJbtxgYZbfDeUWTFNfq8ae05RUunNVOEzZ9pXw
CloudFormation - CREATE_COMPLETE - AWS::Lambda::Version - ApiLambdaVersionrm53BJbtxgYZbfDeUWTFNfq8ae05RUunNVOEzZ9pXw
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Deployment - ApiGatewayDeployment1493486143247
CloudFormation - CREATE_IN_PROGRESS - AWS::ApiGateway::Deployment - ApiGatewayDeployment1493486143247
CloudFormation - CREATE_COMPLETE - AWS::ApiGateway::Deployment - ApiGatewayDeployment1493486143247
CloudFormation - CREATE_COMPLETE - AWS::Lambda::Permission - ApiLambdaPermissionApiGateway
CloudFormation - UPDATE_COMPLETE_CLEANUP_IN_PROGRESS - AWS::CloudFormation::Stack - hapi-serverless-development
CloudFormation - UPDATE_COMPLETE - AWS::CloudFormation::Stack - hapi-serverless-development
Serverless: Stack update finished...
Service Information
service: hapi-serverless
stage: development
region: eu-west-1
api keys:
  None
endpoints:
  ANY - https://xxxxxxxx.execute-api.eu-west-1.amazonaws.com/development/{proxy+}
functions:
  api: hapi-serverless-development-api

Stack Outputs
ApiLambdaFunctionQualifiedArn: arn:aws:lambda:eu-west-1:xxxxxxxxxxxx:function:hapi-serverless-development-api:1
ServiceEndpoint: https://xxxxxxxxxx.execute-api.eu-west-1.amazonaws.com/development
ServerlessDeploymentBucketName: hapi-serverless-developm-serverlessdeploymentbuck-xxxxxxxx
```

# Credits
 - http://www.carbonatethis.com/hosting-a-serverless-hapi-js-api-with-aws-lambda/  
 - https://github.com/carbonrobot/hapi-lambda-demo
