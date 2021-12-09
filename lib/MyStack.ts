import * as cdk from '@aws-cdk/core';

export interface MyStackStackProps extends cdk.StackProps {
    stageName: string;
}

export class MyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: MyStackStackProps) {
        super(scope, id, props);

        // Write your stack here

        // Output some values
        new cdk.CfnOutput(this, 'Environnement', {
            exportName: 'Environnement',
            value: props.stageName,
        });
    }
}
