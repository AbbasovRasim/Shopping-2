import React from "react";
import { HomeCard } from "@/Components/HomeCard";

async function getHome() {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getHome();

  return (
    <div className="containe">
      <div>
        {data.map((project) => (
          <HomeCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
