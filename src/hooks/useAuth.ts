import { useEffect, useState } from 'react';
import { KeyService } from '../services/keyService';
import { StorageService } from '../services/storage';
import { UserProfile } from '../types/user';

export function useAuth() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dataCorrupted, setDataCorrupted] = useState(false);


    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            setIsLoading(true);

            // D'abord vérifier s'il y a une clé d'authentification
            if (!KeyService.isAuthenticated()) {
                setUser(null);
                setIsAuthenticated(false);
                return;
            }

            // En mode développement, vérifier l'état du stockage
            if (__DEV__) {
                await StorageService.checkStorageHealth();
                await StorageService.logAllUsers(); // Log all available users for debugging
            }

            const userProfile = await StorageService.getUserProfile();
            if (userProfile) {
                setUser(userProfile);
                setIsAuthenticated(true);
                setDataCorrupted(false);
            } else {
                // Si on ne peut pas récupérer le profil mais qu'on est authentifié,
                // il se peut que les données soient corrompues
                console.warn('User authenticated but no profile found. Data might be corrupted.');
                setDataCorrupted(true);
                
                // Nettoyer les données corrompues
                try {
                    const cleanupResult = await StorageService.clearCorruptedData();
                    if (cleanupResult.cleaned.length > 0) {
                        console.log('🧹 Data cleanup completed:', cleanupResult);
                    }
                    // Aussi déconnecter l'utilisateur pour forcer une nouvelle inscription
                    KeyService.logout();
                } catch (cleanupError) {
                    console.error('Failed to cleanup corrupted data:', cleanupError);
                }
                
                setUser(null);
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
            setDataCorrupted(true);
            
            // En cas d'erreur, essayer de nettoyer les données corrompues
            try {
                const cleanupResult = await StorageService.clearCorruptedData();
                console.log('🧹 Emergency cleanup completed:', cleanupResult);
                // Déconnecter l'utilisateur en cas d'erreur grave
                KeyService.logout();
            } catch (cleanupError) {
                console.error('Failed to cleanup corrupted data:', cleanupError);
            }
            
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (pin: string): Promise<boolean> => {
        try {
            const success = await KeyService.authenticate(pin);
            if (success) {
                const userProfile = await StorageService.getUserProfile();
                setUser(userProfile);
                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }

    const logout = async () => {
        try {
            KeyService.logout();
            setUser(null);
            setIsAuthenticated(false);
            setDataCorrupted(false); // Clear corruption flag on logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const refreshUser = async () => {
        if (isAuthenticated) {
            const userProfile = await StorageService.getUserProfile();
            setUser(userProfile);
        }
    }

    const clearDataCorruptedFlag = () => {
        setDataCorrupted(false);
    };

    return {
        user,
        isLoading,
        isAuthenticated,
        dataCorrupted,
        checkAuthStatus,
        login,
        logout,
        refreshUser,
        clearDataCorruptedFlag,
    };
}