import * as firebaseModule from "@/api/firebase";
import { getSchedule, popScheduleTag, postSchedule, pushScheduleTag } from "@/api/schedules";

jest.mock("@/api/firebase", () => ({
  ...jest.requireActual("@/api/firebase"),
  postFirebase: jest.fn(),
  getFirebase: jest.fn(),
  pushFirebaseArray: jest.fn(),
  popFirebaseArray: jest.fn(),
}));

describe("postSchedule function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const body: schedule = {
    title: "test",
    startTime: "2024",
    endTime: "2025",
    tags: ["test"],
    description: "test",
    isPersonal: false,
    group: "test",
  };
  test("title이 비어있으면 에러가 반환되어야 한다", () => {
    body.title = "";
    expect(() => postSchedule(body)).toThrow("Invalid string arguments");
  });

  test("모든 값이 올바르게 채워져있으면 postFirebase가 호출되어야 한다", () => {
    body.title = "test";
    postSchedule(body);
    expect(firebaseModule.postFirebase).toHaveBeenCalledWith("schedules", body);
  });

  test("id가 비어있지 않으면 getSchedule은 getFirebase를 호출해야 한다", () => {
    const id = "TEST_ID";
    getSchedule(id);
    expect(firebaseModule.getFirebase).toHaveBeenCalledWith("schedules", id);
  });
});

describe("Schedule functions with string arguments validation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("전달인자가 유효하지 않다면 pushScheduleTag pushFirebaseArray를 호출하지 않는다", () => {
    expect(() => pushScheduleTag("groupId", "")).toThrow("Invalid string arguments");
    expect(firebaseModule.pushFirebaseArray).not.toHaveBeenCalled();
  });

  test("전달인자가 유효하지 않다면 popScheduleTag popFirebaseArray 호출하지 않는다", () => {
    expect(() => popScheduleTag("groupId", "")).toThrow("Invalid string arguments");
    expect(firebaseModule.popFirebaseArray).not.toHaveBeenCalled();
  });
});
