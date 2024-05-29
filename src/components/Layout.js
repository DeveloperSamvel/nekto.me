import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <div className="antialiased flex bg-gray-50 dark:bg-gray-900">
      <SideNav />
      <main className="w-3/4 p-4 md:ml-64 h-auto pt-20">{children}</main>
    </div>
  );
};

export default Layout;
