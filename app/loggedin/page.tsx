
import Tasks from "@/components/todoaix/tasks";
import UserProfile from "@/components/todoaix/user-profile";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <UserProfile />
      <Tasks />
    </main>
  );
}
