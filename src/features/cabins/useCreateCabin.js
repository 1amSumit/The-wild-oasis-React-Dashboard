import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { addEditCabins } from "../../services/apiCabins";

const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { reset } = useForm();

  const { isLoading: isCreatingMutate, mutate: createCabin } = useMutation({
    mutationFn: addEditCabins,
    onSuccess: () => {
      toast.success("New Cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreatingMutate, createCabin };
};

export default useCreateCabin;
