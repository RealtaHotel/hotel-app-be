"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTaskController = void 0;
const common_1 = require("@nestjs/common");
const service_task_service_1 = require("../../../Service/Master/service_task/service_task.service");
const ServiceTask_1 = require("../../../entities/ServiceTask");
let ServiceTaskController = class ServiceTaskController {
    constructor(ServiceTaskService) {
        this.ServiceTaskService = ServiceTaskService;
    }
    findall() {
        return this.ServiceTaskService.findAllServiceTask();
    }
    findById(id) {
        return this.ServiceTaskService.findOneServiceTask(id);
    }
    async createService(data) {
        const service = await this.ServiceTaskService.createService(data);
        if (!service) {
            return 'failed insert to service';
        }
        else {
            return ' success insert to service';
        }
    }
    update(params, body) {
        return this.ServiceTaskService.updateServiceTask(params.id, body);
    }
    remove(params) {
        return this.ServiceTaskService.deleteServiceTask(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceTaskController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceTaskController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceTask_1.ServiceTask]),
    __metadata("design:returntype", Promise)
], ServiceTaskController.prototype, "createService", null);
__decorate([
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ServiceTaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceTaskController.prototype, "remove", null);
ServiceTaskController = __decorate([
    (0, common_1.Controller)('service'),
    __metadata("design:paramtypes", [service_task_service_1.ServiceTaskService])
], ServiceTaskController);
exports.ServiceTaskController = ServiceTaskController;
//# sourceMappingURL=service_task.controller.js.map