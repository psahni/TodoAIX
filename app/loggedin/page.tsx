import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/sidebar";
import TaskList from "@/components/tasks/task-list";

export default function Page() {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SideBar/>
        <div className="flex flex-col">
          <MobileNav />
          <main className="flex flex-col gap-4 p-4 lg:px-8">
            <TaskList/>
          </main>
        </div>
      </div>
    </>
  );
}
