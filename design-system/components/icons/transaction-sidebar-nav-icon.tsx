import { RootState } from "@app/store";
import { useRouter } from "next/router";
import * as React from "react";
import { IconProps } from "../../types";

export const TransactionSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = React.useState<string>("#433A81");
  const { pathname } = useRouter();
  React.useEffect(() => {
    if (pathname.startsWith("/transactions")) {
      setColor("#ffffff");
    } else {
      setColor("#433A81");
    }
  }, [pathname]);
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.25 8C1.25 5.92893 2.92893 4.25 5 4.25H19C21.0711 4.25 22.75 5.92893 22.75 8V16C22.75 18.0711 21.0711 19.75 19 19.75H5C2.92893 19.75 1.25 18.0711 1.25 16V8ZM5 5.75C3.75736 5.75 2.75 6.75736 2.75 8V16C2.75 17.2426 3.75736 18.25 5 18.25H19C20.2426 18.25 21.25 17.2426 21.25 16V8C21.25 6.75736 20.2426 5.75 19 5.75H5Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H22C22.4142 9.25 22.75 9.58579 22.75 10C22.75 10.4142 22.4142 10.75 22 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.25 15C4.25 14.5858 4.58579 14.25 5 14.25L11 14.25C11.4142 14.25 11.75 14.5858 11.75 15C11.75 15.4142 11.4142 15.75 11 15.75L5 15.75C4.58579 15.75 4.25 15.4142 4.25 15Z'
        fill={color}
      />
    </svg>
  );
};

export default TransactionSidebarNavIcon;
