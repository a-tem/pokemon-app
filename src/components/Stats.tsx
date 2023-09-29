import { ResponsiveRadar } from "@nivo/radar";
import { Data } from "../models";
import { TextTransform, TextTransformations } from "../helpers";

type FCProps = {
  stats: Data["stats"];
};

type ChartStats = {
  title: string;
  value: number;
};

const transformStatsToChartData = (stats: FCProps["stats"]): ChartStats[] => {
  return stats.reduce((acc, cur) => {
    const entry: ChartStats = {
      title: TextTransform(cur.stat.name, TextTransformations.capitalize),
      value: cur.base_stat,
    };
    return [...acc, entry];
  }, [] as ChartStats[]);
};

const Stats: React.FC<FCProps> = ({ stats }) => {
  const dataForChart = transformStatsToChartData(stats);

  return (
    <div style={{ height: "350px", width: "450px" }}>
      <ResponsiveRadar
        data={dataForChart}
        keys={["value"]}
        indexBy="title"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        enableDotLabel
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        motionConfig="wobbly"
      />
    </div>
  );
};

export default Stats;
