"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginStatus() {
  const [fullname, setFullname] = useState("");
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!error) {
        const fullname = data.session?.user.user_metadata.fullname;
        setFullname(fullname);
      }
    };
    getUser();
  }, [supabase]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-xs">Logged as</p>
      <p className="text-xl">{fullname || "Loading.."}</p>
    </div>
  );
}
