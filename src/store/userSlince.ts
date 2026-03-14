import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  username: string;
}

interface UserState {
  isLoggedIn: boolean;
  userData: UserData | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Ação para realizar o login
    login: (state, action: PayloadAction<UserData>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    // Realizar o logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
