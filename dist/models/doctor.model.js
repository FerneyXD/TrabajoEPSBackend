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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const cita_model_1 = require("./cita.model");
let Doctor = class Doctor extends sequelize_typescript_1.Model {
};
exports.Doctor = Doctor;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], Doctor.prototype, "id_numeroCedula", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Doctor.prototype, "apellidos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", Date
    //creamos el atributo y el decorador de cada columna, telefono
    )
], Doctor.prototype, "correo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("medicina_interna", 'medicina_general'),
        allowNull: false
    }),
    __metadata("design:type", String)
], Doctor.prototype, "especialidad", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cita_model_1.Cita),
    __metadata("design:type", Array)
], Doctor.prototype, "cita", void 0);
exports.Doctor = Doctor = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'doctor',
    })
    //decorador lo usa ts para q    ue sequelize lo entienda y cree las columnas, se parece a un class, que en si lo es, pero sequelize lo entiende de otra forma
], Doctor);
