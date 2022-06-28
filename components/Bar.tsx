import { FunctionComponent } from "react";
import { ISkill } from "../types";

const Bar: FunctionComponent<{ value: ISkill }> = ({
  value: { name, level, Icon }
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-purple to-blue-700"
        style={{
          width: level
        }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;