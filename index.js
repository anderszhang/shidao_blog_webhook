"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const child_process_1 = __importDefault(require("child_process"));
//处理标识
const server = (0, fastify_1.default)({
    logger: true
});
server.get('/ping', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return 'ping done\n';
}));
server.get('/build', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    //开一个新进程执行build脚本
    child_process_1.default.exec('./build.sh', (err, stdout) => {
        if (err) {
            server.log.error(err);
        }
    });
    return '编译进行中...';
}));
server.listen({
    port: 3000,
    host: '0.0.0.0'
}, (err, address) => {
    if (err) {
        console.error(err);
        // process.exit(1)
    }
    console.log(`Server listening at ${address}`);
});
