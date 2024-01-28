import { useState } from 'react';
import { TEModal, TEModalDialog, TEModalContent, TEModalHeader, TEModalBody } from 'tw-elements-react';
import Button from '../buttons/Button';
import Anchor from '../buttons/Anchor';

export default function VerticalyCentered(): JSX.Element {
  const [showVerticalyCenteredScrollModal, setShowVerticalyCenteredScrollModal] = useState(false);
  return (
    <div>
      {/* Button trigger vertically centered scrollable modal */}
      <Button
        className="bg-red-dark px-3 py-4 text-xl rounded-md text-white"
        onClick={() => {
          setShowVerticalyCenteredScrollModal(true);
        }}
      >
        Read More
      </Button>

      {/* Verically centered scrollable modal */}
      <TEModal
        show={showVerticalyCenteredScrollModal}
        setShow={setShowVerticalyCenteredScrollModal}
        scrollable
        className=" "
      >
        <TEModalDialog centered className="">
          <TEModalContent className="">
            <TEModalHeader className="">
              {/* Modal title */}
              <h5 className={`px-2 font-Paytone text-2xl font-medium leading-normal tracking-wide text-gray-dark`}>
                About Me
              </h5>
              {/* Close button */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowVerticalyCenteredScrollModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </TEModalHeader>
            {/* Modal body */}
            <TEModalBody className="">
              <p className=" px-2 text-lg font-semibold">I graduated with computer science degree in 2022.</p>
              <br />
              <p className=" px-2 text-lg font-semibold">
                My love for technology started at a young age when I got my first computer. I always wondered how it
                worked inside, which prompted my unstoppable desire to feed myself with information about each of its
                components.
              </p>
              <br />
              <p className=" px-2 text-lg font-semibold">
                {' '}
                I really felt like I had superpowers when I ran my first “Hello World”.
              </p>
              <br />
              <p className=" px-2 pb-5 text-lg font-semibold">
                Fast forward to today, and here I am, still learning something new every day as I look for new
                challenges to grow in knowledge and experience.
              </p>
              <Anchor
                className="rounded-lg bg-red-dark px-3 py-4 text-xl mx-auto my-2 block w-fit"
                href="https://drive.google.com/file/d/1d45q1btHjTNrjyUrHY4NwmYVjsW7CH6t/view?usp=sharing"
              >
                View CV
              </Anchor>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
