import supabase from "./subabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

export const addCabins = async (newCabin) => {
  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be created");
  }
  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
};
