import SideBar from "../components/AdminSideBar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex ">
      <SideBar />
      <div className="p-3 w-full h-[100vh]  lg:w-[calc(100%-250px)] lg:right-[250px] lg:relative flex flex-col  mt-12 lg:mt-5 gap-y-6">
        {children}
      </div>
    </main>
  );
}

export default AdminLayout;
