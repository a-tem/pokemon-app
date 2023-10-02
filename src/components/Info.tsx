import { Tag } from "antd";
import { Data } from "../models";
import { ReactNode } from "react";
import { TextTransform, TextTransformations } from "../helpers";

type FCProps = {
  data: Pick<Data, "id" | "height" | "weight" | "abilities" | "types">;
};

type MappedProps = {
  plain: [
    title: string,
    key: keyof Omit<FCProps["data"], "abilities" | "types">,
    value: number
  ][];
  list: [title: string, key: string, value: any][];
};

const mapProps = ({
  id,
  height,
  weight,
  types,
  abilities,
}: FCProps["data"]): MappedProps => {
  return {
    plain: [
      ["ID", "id", id],
      ["Height", "height", height],
      ["Weight", "weight", weight],
    ],
    list: [
      ["Types", "type", types],
      ["Abilities", "ability", abilities],
    ],
  };
};

const renderTagsList = (tags: string[]): ReactNode[] => {
  return tags.map((tag) => (
    <Tag key={tag}>{TextTransform(tag, TextTransformations.upperCase)}</Tag>
  ));
};

const renderTitle = (title: string) => (
  <span className="flex w-48 justify-end mr-2 text-lg text-gray-600">
    {title}:
  </span>
);

const Info: React.FC<FCProps> = ({ data }) => {
  const { plain, list } = mapProps(data);

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        {plain.map(([title, key, value]) => (
          <div className="flex p-2" key={key}>
            {renderTitle(title)}
            <span className="flex grow gap-4 justify-start text-lg text-gray-700">
              {key === "id" && <span>#{value}</span>}
              {key === "height" && <span>{value * 10} cm</span>}
              {key === "weight" && <span>{data.weight / 10} kg</span>}
            </span>
          </div>
        ))}

        {list.map(([title, key, value]) => {
          return (
            <div className="flex p-2" key={key}>
              {renderTitle(title)}
              <span className="flex grow gap-4 justify-start text-lg text-gray-700">
                {renderTagsList(value.map((v: any) => v[key].name))}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Info;
