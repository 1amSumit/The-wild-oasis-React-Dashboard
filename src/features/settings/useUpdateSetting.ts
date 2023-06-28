import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully updated!");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateSetting };
};

export default useUpdateSetting;
