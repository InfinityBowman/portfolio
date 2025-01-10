import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaChevronUp, FaChevronDown, FaTimes } from "react-icons/fa";

interface VoteButtonsProps {
  initialVotes: number;
  user: any;
}

const VoteButtons: React.FC<VoteButtonsProps> = ({ initialVotes, user }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleUpVote = () => {
    if (user) {
      setVotes(votes + 1);
    } else {
      setShowLoginMessage(true);
    }
  };

  const handleDownVote = () => {
    if (user) {
      setVotes(votes - 1);
    } else {
      setShowLoginMessage(true);
    }
  };

  const handleCloseMessage = () => {
    setShowLoginMessage(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowLoginMessage(false);
      }
    };

    if (showLoginMessage) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLoginMessage]);

  return (
    <div className="relative flex flex-col items-center mx-2">
      <button onClick={handleUpVote} className="text-blue-500 hover:text-blue-300 -my-1">
        <FaChevronUp />
      </button>
      <div>{votes}</div>
      <button onClick={handleDownVote} className="text-red-500 hover:text-red-300 -my-1">
        <FaChevronDown />
      </button>
      {showLoginMessage &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div ref={modalRef} className="bg-secondary p-12 rounded-lg shadow-lg relative">
              <div className="text-primary mb-4">You must be logged in to vote!</div>
              <button
                onClick={handleCloseMessage}
                className="absolute top-2 right-2 hover:bg-muted-hover text-primary rounded-full bg-muted p-2 duration-0"
              >
                <FaTimes />
              </button>
              <a href="/sign-in" className="text-blue-500 hover:text-blue-700">
                Sign In
              </a>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default VoteButtons;
