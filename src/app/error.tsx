"use client";

export default function UnexpectedError({ retry }: { retry: () => void }) {
  return (
    <div className="text-center mt-6">
      <p className="text-foreground-secondary text-lg lg:text-xl">
        An unexpected error occurred.
      </p>
      <p>Please click below to try again.</p>
      <button
        onClick={() => retry()}
        type="button"
        className="border rounded-lg px-4 py-2.5 bg-foreground-secondary text-background my-4"
      >
        Try again
      </button>
    </div>
  );
}
