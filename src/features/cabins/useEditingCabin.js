import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { addEditCabins } from "../../services/apiCabins";

const useEditingCabin = () => {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => addEditCabins(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully updated!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editCabin };
};

export default useEditingCabin;
