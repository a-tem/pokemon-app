import { Tag } from "antd";
import { Data } from "../models";
import { ReactNode } from "react";
import { TextTransform, TextTransformations } from "../helpers";

type FCProps = {
  data: Pick<Data, "id" | "height" | "weight" | "abilities" | "types">;
};

const renderTagsList = (tags: string[]): ReactNode[] => {
  return tags.map((tag) => (
    <Tag key={tag}>{TextTransform(tag, TextTransformations.upperCase)}</Tag>
  ));
};

const Info: React.FC<FCProps> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <div className="flex p-2">
          <span className="flex w-48 justify-end mr-2 text-lg text-gray-600">
            ID:
          </span>
          <span className="flex grow gap-4 justify-start text-lg text-gray-700">
            #{data.id}
          </span>
        </div>
        <div className="flex p-2">
          <span className="flex w-48 justify-end mr-2 text-lg text-gray-600">
            Height:
          </span>
          <span className="flex grow gap-4 justify-start text-lg text-gray-700">
            {data.height * 10} cm
          </span>
        </div>
        <div className="flex p-2">
          <span className="flex w-48 justify-end mr-2 text-lg text-gray-600">
            Weight:
          </span>
          <span className="flex grow gap-4 justify-start text-lg text-gray-700">
            {data.weight / 10} kg
          </span>
        </div>
        <div className="flex p-2">
          <span className="flex w-48 justify-end mr-2 text-lg text-gray-600">
            Abilities:
          </span>
          <span className="flex grow gap-4 justify-start text-lg text-gray-700">
            {renderTagsList(data.types.map((types) => types.type.name))}
          </span>
        </div>
        <div className="flex p-2">
          <span className="flex w-48 justify-end mr-2 text-lg text-gray-600">
            Type:
          </span>
          <span className="flex grow gap-4 justify-start text-lg text-gray-700">
            {renderTagsList(
              data.abilities.map((abilities) => abilities.ability.name)
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Info;
