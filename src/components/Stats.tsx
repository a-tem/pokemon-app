import { ResponsiveRadar } from "@nivo/radar";

const fakeData = [
  {
    value: Math.random() * 1000,
    title: "Prop One",
  },
  {
    value: Math.random() * 1000,
    title: "Prop Two",
  },
  {
    value: Math.random() * 1000,
    title: "Prop Three",
  },
];

const Stats: React.FC = () => {
  return (
    <div style={{ height: "350px", width: "450px" }}>
      <ResponsiveRadar
        data={fakeData}
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
