"use client"

import { Bar, BarChart, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    total: 12,
  },
  {
    name: "Feb",
    total: 15,
  },
  {
    name: "Mar",
    total: 18,
  },
  {
    name: "Apr",
    total: 13,
  },
  {
    name: "May",
    total: 20,
  },
  {
    name: "Jun",
    total: 16,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}