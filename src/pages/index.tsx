import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
// import components
import TaskOne from "@/components/TASK 1";
import TaskTwo from "@/components/TASK 2";
import TaskThree from "@/components/TASK 3";
import TaskFour from "@/components/TASK 4";

export default function Home() {
  const data = [
    { title: "Title 1", description: "Lorem 1" },
    { title: "Title 2", description: "Lorem 2" },
    { title: "Title 3", description: "Lorem 3" },
    { title: "Title 4", description: "Lorem 4" },
    { title: "Title 5", description: "Lorem 5" },
  ];
  return (
    <>
      <TaskOne></TaskOne>
      <TaskTwo></TaskTwo>
      <TaskThree></TaskThree>
      <TaskFour></TaskFour>
    </>
  );
}
