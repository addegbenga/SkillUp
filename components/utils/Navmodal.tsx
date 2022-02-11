import { Fragment } from "react";
import { NextPage } from "next";
import { FaTimes } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";

type ModalTypes = {
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  isOpen: boolean;
};

const Navmodal: NextPage<ModalTypes> = ({
  isOpen,
  handleCloseModal,
  handleOpenModal,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={handleCloseModal}
      >
        <div className="min-h-screen relative text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed bg-black bg-opacity-80 inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0  scale-75 transform "
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="  scale-75  transform"
          >
            <button
              onClick={handleCloseModal}
              className=" z-20 transform ease-out duration-100 delay-200 absolute bg-white flex items-center justify-center rounded-full z-50 right-12 h-10 w-10  top-4"
            >
              <FaTimes />
            </button>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0  -translate-x-44 transform"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="  -translate-x-44 transform"
          >
            <div className="w-2/3 absolute top-0  h-screen  p-6  overflow-hidden text-left transition-all transform bg-white shadow-xl ">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleCloseModal}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
            {/* </div> */}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Navmodal;
