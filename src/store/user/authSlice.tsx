import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {useNavigate} from "react-router-dom";

interface AuthState {
    user: { username: string } | null;
    token: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    refreshToken: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; token: string; refreshToken: string }>) => {
            state.user = { username: action.payload.username };
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('token', state.token);
            localStorage.setItem('refreshToken', state.refreshToken);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        },
        setUserFromStorage: (state) => {
            const storedUser = localStorage.getItem('user');
            const storedToken = localStorage.getItem('token');
            const storedRefreshToken = localStorage.getItem('refreshToken');
            if (storedUser && storedToken && storedRefreshToken) {
                state.user = JSON.parse(storedUser);
                state.token = storedToken;
                state.refreshToken = storedRefreshToken;
            }
            if(storedUser == null){
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
            }

        }
    },
});

export const { login, logout, setUserFromStorage } = authSlice.actions;

export default authSlice.reducer;

