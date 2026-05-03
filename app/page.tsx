"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [date, setDate] = useState("");

  const handleStart = () => {
    localStorage.setItem("bride", bride);
    localStorage.setItem("groom", groom);
    localStorage.setItem("date", date);

    router.push("/dashboard");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Wedshaala</h1>

      <input
        placeholder="Bride Name"
        value={bride}
        onChange={(e) => setBride(e.target.value)}
      />

      <input
        placeholder="Groom Name"
        value={groom}
        onChange={(e) => setGroom(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleStart}>
        Start Planning
      </button>
    </div>
  );
}
