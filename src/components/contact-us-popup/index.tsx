import { useState } from "react";
import { Styles } from "./styles";
import avatar from "../../assets/images/icons/avatar.png";
import { Form } from "react-bootstrap";
import { IoIosSend, IoMdCloseCircleOutline } from "react-icons/io";

interface ContactUsPopupProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ContactUsPopup: React.FC<ContactUsPopupProps> = ({ setIsOpen }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Logic to send the message goes here
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <Styles>
      <div className="header">
        <div className="user">
          <div className="avatar">
            <img src={avatar} alt="username" />
          </div>
          <div className="user-data">
            <div className="name">John Doe</div>
            <div className="status">
              <div className="status-point"></div>
              active
            </div>
          </div>
        </div>
        <button
          className="close"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat popup"
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <div className="messages">
        {/* Incoming message */}
        <div className="message-container incoming-message">
          <div className="user">
            <img src={avatar} alt="username" />
          </div>
          <div className="data">
            <div className="message">
              Lorem ipsum dolor sit a aenean ut euismod at integer id nulla
              cursus te
            </div>
          </div>
        </div>

        {/* Outgoing message */}
        <div className="message-container outcoming-message">
          <div className="user">
            <img src={avatar} alt="username" />
          </div>
          <div className="data">
            <div className="message">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              tenetur!
            </div>
          </div>
        </div>
        <div className="message-container incoming-message">
          <div className="user">
            <img src={avatar} alt="username" />
          </div>
          <div className="data">
            <div className="message">
              Lorem ipsum dolor sit a aenean ut euismod at integer id nulla
              cursus te
            </div>
          </div>
        </div>
        <div className="message-container outcoming-message">
          <div className="user">
            <img src={avatar} alt="username" />
          </div>
          <div className="data">
            <div className="message">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              tenetur!
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Form onSubmit={handleSendMessage}>
          <Form.Control
            name="message"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="send" aria-label="Send message">
            <IoIosSend />
          </button>
        </Form>
      </div>
    </Styles>
  );
};

export default ContactUsPopup;
