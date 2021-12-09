# CDK Project Template

## Summary
A basic template repo to use when starting new cdk project from stratch. Contains a basic exemple deploying an empty stack.

## Requirements
- nodejs v12 or later: https://nodejs.org
- vscode (recommended): https://code.visualstudio.com/

## Getting started
1. Clone the repository
2. Install recommended extensions <br>
Navigate to `Extensions`, filter extensions using `@recommended` filter, click the ☁️ button to install all extensions at once

3. Install the dependencies
```
npm install
```
4. List CDK stacks
```
npx cdk list
```
5. Create the CDK stack
```
npx cdk deploy <StackName>
```
6. Open the AWS CloudFormation Console and the stack should be created in the specified region
7. Cleanup
```
npx cdk destroy <StackName>
```

## Linting
```
npm run lint
```

## Testing

- Type checking
```
npm run type-check
```
- Unit testing with jest
```
npm run test
```

## Documentation

- CDK API reference
https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html
- CDK exemples
https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript
- CDK testing exemple
https://github.com/cdklabs/aws-cdk-testing-examples
