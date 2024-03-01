/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
type TableTypes = "users" | "tags" | "schedules" | "groups";

type id = { id: string };

type user = {
  name: string;
};
type tag = {
  title: string;
  color: string;
};
type schedule = {
  title: string;
  start_time: string;
  end_time: string;
  tags: string[];
  description: string;
  users: string[];
};

type group = {
  users: string[];
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
