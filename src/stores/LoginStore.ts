import { types } from "mobx-state-tree";
import { BaseStore } from "./base/BaseStore";

const User = types.model({
  username: types.optional(types.string, ""),
  password: types.optional(types.string, ""),
});

const DefaultStore = types
  .model({
    user: types.optional(User, {}),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setUsername(username: string) {
      self.user.username = username;
    },
    setPassword(password: string) {
      self.user.password = password;
    },
    setLoading(isLoading: boolean) {
      self.isLoading = isLoading;
    },
  }))
  .views((self) => ({
    get username() {
      return self.user.username;
    },
    get password() {
      return self.user.password;
    },
  }));

const LoginStore = types.compose(DefaultStore, BaseStore);

export { LoginStore };
