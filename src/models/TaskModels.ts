import type { TaskStateModel } from "./TaskStateModels";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando o timer chega ao final
  interruptDate: number | null; //quando a task foi interrompida
  type: keyof TaskStateModel["config"];
};
