import { Input } from "@material-tailwind/react";
import { forwardRef } from "react";
const InputMovie = forwardRef((props, ref) => {
  return (
    <div className="w-max md:w-1/2">
      <Input label="Movie Search" inputRef={ref} size="lg" />
    </div>
  );
});

export default InputMovie;
