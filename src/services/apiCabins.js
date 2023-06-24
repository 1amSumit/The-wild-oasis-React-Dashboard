import supabase, { supabaseUrl } from "./subabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

export const addEditCabins = async (newCabin, id) => {
  //1 Add new cabin

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  let query = supabase.from("cabins");

  //A) Create a cabin if there is no Id
  if (!id) {
    query.insert([{ ...newCabin, image: imagePath }]);
  }

  //B) Edit if there is Id

  if (id) {
    query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  //https://dlznoniyykfdgnuzhpyg.supabase.co/storage/v1/object/public/cabins/cabin-001.jpg

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be created");
  }

  //2 if no error upload image
  const { error: imageUploadError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);
  //delete cabin if error in uploaing error

  if (imageUploadError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(imageUploadError, "error kaha hai bhai");

    throw new Error(
      "Cabins image could not be uploaded, cabin could not be created"
    );
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
