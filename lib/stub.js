"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
/**
 * mocks an object's property
 */
function default_1(object, path, fn) {
    if (object === undefined || path === undefined)
        throw new Error('should not be undefined');
    let stub;
    return {
        run(ctx) {
            if (!ctx.sandbox) {
                ctx.sandbox = sinon.createSandbox();
            }
            stub = fn(ctx.sandbox.stub(object, path));
        },
        finally() {
            stub.restore();
        },
    };
}
exports.default = default_1;
