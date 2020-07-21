/// <reference types="sinon" />
import { expect } from './chai';
import * as FancyTypes from './types';
export declare const fancy: FancyTypes.Base<FancyTypes.Context, {
    skip: {
        output: unknown;
        args: [];
    };
} & {
    only: {
        output: unknown;
        args: [];
    };
} & {
    retries: {
        output: unknown;
        args: [number];
    };
} & {
    catch: {
        output: {
            error: Error;
        };
        args: [string | RegExp | ((err: Error) => any), ({
            raiseIfNotThrown?: boolean | undefined;
        } | undefined)?];
    };
} & {
    env: {
        output: unknown;
        args: [{
            [k: string]: string | null | undefined;
        }, (FancyTypes.EnvOptions | undefined)?];
    };
} & {
    stub: {
        output: {
            sandbox: import("sinon").SinonSandbox;
        };
        args: [any, any, (stub: import("sinon").SinonStub<any[], any>) => import("sinon").SinonStub<any[], any>];
    };
} & {
    stdin: {
        output: unknown;
        args: [string, (number | undefined)?];
    };
} & {
    stderr: {
        output: {
            readonly stderr: string;
        };
        args: [({
            print?: boolean | undefined;
            stripColor?: boolean | undefined;
        } | undefined)?];
    };
} & {
    stdout: {
        output: {
            readonly stdout: string;
        };
        args: [({
            print?: boolean | undefined;
            stripColor?: boolean | undefined;
        } | undefined)?];
    };
} & {
    nock: {
        output: {
            nock: number;
        };
        args: [string, FancyTypes.NockOptions | FancyTypes.NockCallback, (FancyTypes.NockCallback | undefined)?];
    };
} & {
    timeout: {
        output: {
            timeout: number;
        };
        args: [(number | undefined)?];
    };
}>;
export declare type Fancy = typeof fancy;
export { expect, FancyTypes, };
export default fancy;