import React from "react"

type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string[]
};

export function Input({ title, id, errorMessage, ...rest }: InputBaseProps) {
    return (
        <div>
            <label className="text-gray-600" htmlFor={id}>{title}</label>
            <input id={id} {...rest} />
            {
                errorMessage ?
                    <ul className="list-decimal">
                        {errorMessage.map((error) => (
                            <li className=" text-sm text-rose-600" key={error}>{error}</li>
                        ))}
                    </ul> :
                    <></>
            }
        </div>
    )
}