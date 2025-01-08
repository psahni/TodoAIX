
import Tasks from "@/components/todoaix/tasks";
import UserProfile from "@/components/nav/user-profile";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/sidebar";

export default function Page() {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SideBar/>
        <div className="flex flex-col">
          <MobileNav />
          <main className="flex flex-col items-center justify-between p-24">
            <Tasks />
          </main>
        </div>
      </div>
    </>
  );
}
