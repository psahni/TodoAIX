
import { ReactNode, useMemo } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { Session } from "next-auth";

export function useAuth() {
  const { data: session } = useSession();
  return useMemo(() => {
    return {
      session,
    };
  }, [session]);
}

export default function Providers({ children, session }:   {
  children: ReactNode;
  session: Session | null;
} ) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}

