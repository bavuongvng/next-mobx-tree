import { types } from "mobx-state-tree";

const Notification = types.model({
  type: types.optional(
    types.enumeration("Type", ["Error", "Success"]),
    "Error"
  ),
  message: types.optional(types.string, ""),
  open: types.optional(types.boolean, false),
});

const BaseStore = types
  .model({
    notification: types.optional(Notification, {}),
  })
  .actions((self) => ({
    setSuccess(message: string) {
      self.notification.message = message;
      self.notification.type = "Success";
      self.notification.open = true;
    },
    setError(message: string) {
      self.notification.message = message;
      self.notification.type = "Success";
      self.notification.open = true;
    },
    hideNotification() {
      self.notification.open = false;
    },
  }));

export { BaseStore };
