import { Header } from "./header";
import { Menu } from "./menu";

type LayoutProps = {
  children?: React.ReactNode;
}

export const Layout = ({children}:LayoutProps) => {
  return (
    <div className="container-fluid mx-auto h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
            <Menu />
            <div className="col w-full p-4">
                 {children}
            </div>
        </div>
    </div>
  )
}
