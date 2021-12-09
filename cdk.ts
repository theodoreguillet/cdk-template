import * as cdk from '@aws-cdk/core';
import {devRegion, prodRegion} from './config';
import {MyStack} from './lib/MyStack';

const app = new cdk.App();

// My stacks
const devMyStack = new MyStack(app, 'MyStackDev', {
    stageName: 'dev',

    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: devRegion,
    },
});
cdk.Tags.of(devMyStack).add('environment', 'dev');

const prodMyStack = new MyStack(app, 'MyStackProd', {
    stageName: 'prod',
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: prodRegion,
    },
});
cdk.Tags.of(prodMyStack).add('environment', 'prod');

app.synth();
