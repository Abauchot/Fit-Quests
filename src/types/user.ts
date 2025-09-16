import type { DnDClass } from './index';

export interface HealthFlags {
    hasKneeIssues: boolean;
    hasShoulderIssues: boolean;
}

export interface UserProfile {
    id: string;
    username: string;
    password: string;
    favoriteClass: DnDClass;
    healthFlags: HealthFlags;
    totalXP: number;
    level: number;
    createdAt: string;
    jwt: string;
}
export interface User {
    id: string;
    username: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserInput {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface UpdateUserInput {
    username?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
}