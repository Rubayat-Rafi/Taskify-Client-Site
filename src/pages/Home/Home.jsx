import TaskCard from "../../components/Cards/TaskCard";
import { MdAdd } from "react-icons/md";
import AddTask from "./AddTask";


const Home = () => {


  return (
    <>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {/* task card  */}
          <TaskCard
            title="Meeting on 7th April"
            date="3rd apr 2025"
            content="Meeting on 7th april this is a website building meeting, so i have to join."
            tags={"#Meeting"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinTask={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AddTask />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Home;
