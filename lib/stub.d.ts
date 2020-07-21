import * as sinon from 'sinon';
/**
 * mocks an object's property
 */
export default function <T extends object, K extends keyof T>(object: T, path: K, fn: (stub: sinon.SinonStub) => sinon.SinonStub): {
    run(ctx: {
        sandbox: sinon.SinonSandbox;
    }): void;
    finally(): void;
};
