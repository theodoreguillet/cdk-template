import {Template} from '@aws-cdk/assertions';
import * as cdk from '@aws-cdk/core';
import {MyStack} from '../lib/MyStack';

describe('MyStackDev', () => {
    test('synthesizes the way we expect', () => {
        const app = new cdk.App();

        // Create the MyStack.
        const myStack = new MyStack(app, 'MyStackDev', {
            stageName: 'dev',
        });

        // Prepare the stack for assertions.
        const template = Template.fromStack(myStack);

        // Write some assertions here
        template.hasOutput('Environnement', {
            Export: {Name: 'Environnement'},
            Value: 'dev',
        });
    });
});

describe('MyStackProd', () => {
    test('synthesizes the way we expect', () => {
        const app = new cdk.App();

        // Create the MyStack.
        const myStack = new MyStack(app, 'MyStackProd', {
            stageName: 'prod',
        });

        // Prepare the stack for assertions.
        const template = Template.fromStack(myStack);

        // Write some assertions here
        template.hasOutput('Environnement', {
            Export: {Name: 'Environnement'},
            Value: 'prod',
        });
    });
});
