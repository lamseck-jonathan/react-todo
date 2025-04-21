import { Task } from "../interface/task.interface";

export const getEmptyTask = (): Task => {
  return { name: "", isDone: false };
};
