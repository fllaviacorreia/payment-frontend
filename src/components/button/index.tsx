import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    classes: string;
}

export default function Button({title, color, classes, ...rest}: ButtonType){
    return (
        <div>
          <button className= {`text-center ${classes}`} {...rest}>
            {title}
          </button>
        </div>
      );
}