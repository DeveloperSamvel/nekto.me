import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <div className="antialiased flex mx-40 bg-gray-50 dark:bg-gray-900">
      <SideNav />
      <div className="bg-white border-r h-auto w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
