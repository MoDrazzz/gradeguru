import { supabase } from "./supabaseClient";

export const getClaim = async (uid: string, claim: string) => {
  const { data, error } = await supabase.rpc("get_claim", { uid, claim });
  return { data, error };
};
export const setClaim = async (uid: string, claim: string, value: any) => {
  const { data, error } = await supabase.rpc("set_claim", {
    uid,
    claim,
    value,
  });
  return { data, error };
};
