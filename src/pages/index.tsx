import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
// import components
import Card from "@/components/card";
import Banner from "@/components/banner";
// modules
import { Server } from "@/modules/server";

interface User {
  name: string;
  mail: string;
  comment: string;
}

export default function Home() {
  const data = [
    { id: 1, title: "Title 1", description: "Lorem 1" },
    { id: 2, title: "Title 2", description: "Lorem 2" },
    { id: 3, title: "Title 3", description: "Lorem 3" },
    { id: 4, title: "Title 4", description: "Lorem 4" },
    { id: 5, title: "Title 5", description: "Lorem 5" },
  ];
  //init
  const server = new Server();
  // states
  const [number, setNumber] = useState<number>(0);
  // const [name, setName] = useState<string>("test");
  const [users, setUsers] = useState<User>({
    name: "",
    mail: "",
    comment: "",
  });

  // on loan
  useEffect(() => {
    console.log("UserEffect", number);
  }, [number]);

  // calc
  const adult = useMemo(() => {
    if (number >= 18) {
      return "Повнолітній";
    } else {
      return "Неповнолітній";
    }
  }, [number]);

  //functions
  const reverseProps = (data: string) => {
    console.log("Reverse props! Worked");
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        reverseProps={reverseProps}
        title="Test Baner"
        description="Lorem Ipsum"
      ></Banner>
      <main>
        <h1>Home</h1>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <div>{adult}</div>
        <div>{number}</div>
        <div>
          {/* Increment */}
          <button onClick={() => setNumber(number + 1)}>+</button>
          {/* Decrement */}
          <button onClick={() => setNumber(number - 1)}>-</button>
        </div>
        {/* {data.map((e: any) => {
          return <Card num={number} data={e} key={e} />;
        })} */}
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
        {/* form */}
        <form action="">
          <input
            value={users.name}
            type="text"
            placeholder="Enter your name: "
            onChange={(e) => {
              setUsers({
                ...users,
                name: e.target.value,
              });
            }}
          />
          <input
            value={users.mail}
            type="mail"
            placeholder="Enter your email: "
            onChange={(e) => {
              setUsers({
                ...users,
                mail: e.target.value,
              });
            }}
          />
          <textarea
            value={users.comment}
            placeholder="Enter text: "
            onChange={(e) => {
              setUsers({
                ...users,
                comment: e.target.value,
              });
            }}
          ></textarea>
          <input
            onChange={(e) => {
              e.preventDefault();
              server.post("/endpoint", users);
            }}
            type="submit"
          />
        </form>
      </main>
    </>
  );
}
