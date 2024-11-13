"use client";
import React from "react";
import { SingleHomeCard } from "@/Components/SingleHomeCard";
import { IPageProps } from "@/interfaces";
async function getHomeSingle(id: string) {
  const res = await fetch(`http://localhost:5000/products/${id}`);
  const data = await res.json();
  console.log(data); // Burada API-dən gələn məlumatı yoxlayın
  return data;
}
export default async function HomeSingle({ params: { id } }: IPageProps) {
  const project = await getHomeSingle(id);
  return <SingleHomeCard id={project.id} images={project.images} />;
}
