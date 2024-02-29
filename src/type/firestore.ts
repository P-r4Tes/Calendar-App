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
  start_time: Date;
  end_time: Date;
  tag: string;
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
