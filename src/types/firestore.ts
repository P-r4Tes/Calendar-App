/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
type TableTypes = "users" | "tags" | "schedules" | "groups";

type id = { id: string };

type user = {
  email: string;
  name: string;
  groups: string[];
  personalSchedules: string[];
};
type tag = {
  title: string;
  color: string;
};
type schedule = {
  title: string;
  startTime: string;
  endTime: string;
  tags: string[];
  description: string;
  isPersonal: boolean;
  group: string | null;
};

type group = {
  users: string[];
  schedules: string[];
  name: string;
};

type TalbeField<T> = T extends "users"
  ? user
  : T extends "tags"
    ? tag
    : T extends "schedules"
      ? schedule
      : T extends "groups"
        ? group
        : never;
