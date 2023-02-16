import { Request } from 'express';

export interface IRequest<T> extends Request {
    body: T
}

export interface IRole {
    id: number,
    uuid: string,
    name: string,
    isActive: boolean
}

export interface IBranch {
    id: number,
    uuid: string,
    buildingNo: number,
    street: string,
    landmark: string,
    city: string,
    state: string,
    country: string,
    zipCode: number
    isActive: boolean
}

export interface IDepartment {
    _id: string;
    id: number,
    uuid: string,
    name: string,
    description: string,
    logo: string,
    isActive: boolean
}

export interface IDesignation {
    id: number,
    uuid: string,
    name: string,
    level: string,
    isActive: boolean
}
export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    phoneNumber: number,
    role_Id: number,
    createdAt: Date;
    updatedAt: Date;
    matchPassword: (enteredPassword: string) => Promise<boolean>;
    changedPasswordAfter: (timestamp: number) => boolean;
    getResetPasswordToken: () => string;
}

export interface IUserVerification {
    id: number,
    uuid: string,
    resetToken: string,
    resetTokenAt: string,
    userId: number,
    isActive: boolean
}

export interface IUserProfile {
    id: number,
    uuid: string,
    userId: string,
    designationId: number,
    branchId: number,
    departmentId: number,
    profileUrl: string,
    dateOfBirth: Date,
    dateOfJoining: Date,
    isActive: boolean
}

export interface IBirthdayReminder {
    id: number,
    uuid: string,
    userId: number,
    status: string,
    failedCount: string,
    errorMessage: number,
    isActive: boolean
}

export interface ITemplate {
    id: number,
    uuid: string,
    contentBody: string,
    content: JSON,
    type: string,
    isActive: boolean
}
