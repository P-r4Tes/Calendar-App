import * as firebaseModule from "@/api/firebase";
import { getGroup, popGroupSchedule, popGroupuser, postGroup, pushGroupSchedule, pushGroupUser } from "@/api/groups";

jest.mock("@/api/firebase", () => ({
  ...jest.requireActual("@/api/firebase"),
  postFirebase: jest.fn(),
  getFirebase: jest.fn(),
  pushFirebaseArray: jest.fn(),
  popFirebaseArray: jest.fn(),
}));

describe("postGroup function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("name이 비어있으면 에러가 반환되어야 한다", () => {
    const body = { name: "", schedules: [], users: [] };
    expect(() => postGroup(body)).toThrow("Invalid name");
  });

  test("name이 비어있지 않으면 postFirebase가 호출되어야 한다", async () => {
    const body = { name: "TEST", schedules: [], users: [] };
    postGroup(body);
    expect(firebaseModule.postFirebase).toHaveBeenCalledWith("groups", body);
  });

  test("id가 비어있지 않으면 getGroup은 getFirebase를 호출해야 한다", () => {
    const id = "TEST_ID";
    getGroup(id);
    expect(firebaseModule.getFirebase).toHaveBeenCalledWith("groups", id);
  });
});
describe("Group functions with string arguments validation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("전달인자가 유효하지 않다면 pushGroupSchedule는 pushFirebaseArray를 호출하지 않는다", () => {
    expect(() => pushGroupSchedule("groupId", "")).toThrow("Invalid string arguments");
    expect(firebaseModule.pushFirebaseArray).not.toHaveBeenCalled();
  });

  test("전달인자가 유효하지 않다면 pushGroupUser는 pushFirebaseArray를 호출하지 않는다", () => {
    expect(() => pushGroupUser("groupId", "")).toThrow("Invalid string arguments");
    expect(firebaseModule.pushFirebaseArray).not.toHaveBeenCalled();
  });

  test("전달인자가 유효하지 않다면 popGroupuser는 popFirebaseArray를 호출하지 않는다", () => {
    expect(() => popGroupuser("groupId", "")).toThrow("Invalid string arguments");
    expect(firebaseModule.popFirebaseArray).not.toHaveBeenCalled();
  });

  test("전달인자가 유효하지 않다면 popGroupSchedule는 popFirebaseArray를 호출하지 않는다", () => {
    expect(() => popGroupSchedule("groupId", "")).toThrow("Invalid string arguments");
    expect(firebaseModule.popFirebaseArray).not.toHaveBeenCalled();
  });
});
