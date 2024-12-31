import { Fragment } from "react/jsx-runtime";

export default function Loading() {
  return (
    <Fragment>
      <div className={"flex items-center justify-center h-[80%]"}>
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </Fragment>
  );
}
