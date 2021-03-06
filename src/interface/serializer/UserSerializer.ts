import { User } from "../../entities/user";
import { BaseSerializer } from "./BaseSerializer";

export class UserSerializer extends BaseSerializer {
  public user(data: User) {
    if (!data) {
      return {
        code: "errorCode",
        message: "data is null",
        responsedAt: "time",
      };
    }
    return {
      code: "successCode",
      data: {
        uid: data.uid,
        userName: data.userName,
        userEmail: data.userEmail,
      },
      responsedAt: "time",
    };
  }
  public users(data: User[]) {
    if (!data) {
      return {
        code: "errorCode",
        message: "data is null(no users)",
        responsedAt: "time",
      };
    }
    return {
      code: "successCode",
      data: data.map((d): User => {
        return {
          uid: d.uid,
          userName: d.userName,
          userEmail: d.userEmail,
        };
      }),
      responsedAt: "time",
    };
  }
}
