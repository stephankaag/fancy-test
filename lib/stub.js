"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
/**
 * mocks an object's property
 */
function default_1(object, path, value) {
    if (object === undefined || path === undefined)
        throw new Error('should not be undefined');
    return {
        run(ctx) {
            if (!ctx.sandbox) {
                ctx.sandbox = sinon.createSandbox();
            }
            ctx.sandbox.stub(object, path).value(value);
        },
        finally(ctx) {
            ctx.sandbox.restore();
        },
    };
}
exports.default = default_1;
