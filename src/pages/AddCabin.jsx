import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );

  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const onClickHandler = () => {
  //   setIsOpenModal((pre) => !pre);
  // };
  // return (
  //   <>
  //     <Button onClick={onClickHandler}>Add New Cabin</Button>
  //     {isOpenModal && (
  //       <Modal onCLose={() => setIsOpenModal(false)}>
  //         <CreateCabinForm onCLoseModal={() => setIsOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </>
  // );
};

export default AddCabin;
