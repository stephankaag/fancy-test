import * as sinon from 'sinon';
/**
 * mocks an object's property
 */
export default function <T extends object, K extends keyof T>(object: T, path: K, value: any): {
    run(ctx: {
        sandbox: sinon.SinonSandbox;
    }): void;
    finally(ctx: {
        sandbox: sinon.SinonSandbox;
    }): void;
};
