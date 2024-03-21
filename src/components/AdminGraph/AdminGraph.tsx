import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import RoomCount from "../../Interfaces/roomCount";

interface Props {
  data: RoomCount[];
}

const AdminGraph = ({ data }: Props) => {
  return (
    <div style={{ width: "100%", height: 340 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={400} data={data}>
          <YAxis />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Bar
            type="monotone"
            dataKey="occupied"
            stroke="black"
            // fill="#8dd1ab"
            fill="#1e373880"
            // fill="#5C5C5C"
            stackId={1}
          />
          <Bar
            type="monotone"
            dataKey="empty"
            stroke="#1E3738"
            fill="#fe6674"
            // fill="#1E3738"
            stackId={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminGraph;
