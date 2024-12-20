"use client";
import { TimerForm } from "./components/TimerForm";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full max-w-3xl flex-col gap-8 p-4">
      <div className="mx-auto w-fit rounded-md bg-base-200 px-4 py-2 text-lg font-bold text-base-content">
        Timer
      </div>
      <div className="mx-auto flex w-fit flex-col gap-4">
        <TimerForm />
      </div>
    </main>
  );
}
