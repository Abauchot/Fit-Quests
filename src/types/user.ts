import type { DnDClass } from './index';

export interface HealthFlags {
    hasKneeIssues: boolean;
    hasShoulderIssues: boolean;
}

export interface UserProfile {
    id: string;
    username: string;
    favoriteClass: DnDClass;
    healthFlags: HealthFlags;
    totalXP: number;
    level: number;
    createdAt: string;

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
    pin : string;
    favoriteClass?: DnDClass;

}

export interface AuthCredentials {
    username: string;
    pin: string;
}

export interface UserSettings {
    avatar?: string;
    theme?: 'light' | 'dark';
    notificationsEnabled?: boolean;
}

export interface UpdateUserInput {
    username?: string;
    pin?: string;
    favoriteClass?: DnDClass;
    healthFlags?: HealthFlags;
}

export interface UpdateUserSettingsInput {
    avatar?: string;
    theme?: 'light' | 'dark';
    notificationsEnabled?: boolean;
}

export interface ChangePasswordInput {
    oldPin: string;
    newPin: string;
}


