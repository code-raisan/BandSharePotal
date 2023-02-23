type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const ButtonSuccess = ({ children, className, ...props }: Props) => {
    return (
      <button className={`inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 disabled:bg-indigo-800 ${className}`} {...props}>
        {children}
      </button>
    );
  };