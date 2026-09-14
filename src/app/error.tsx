"use client";

export default function UnexpectedError({ retry }: { retry: () => void }) {
  return (
    <div className="w-full mx-auto my-12 px-2 max-w-225">
      <div className="my-8 mx-2">
        <h2>Something went wrong!</h2>
        <button onClick={() => retry()} type="button">
          Try again
        </button>
      </div>
    </div>
  );
}
