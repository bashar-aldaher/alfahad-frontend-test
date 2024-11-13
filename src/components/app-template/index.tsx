import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import SiteNavbar from "./navbar";
import { Styles } from "./styles";
import ChatIcon from "../../assets/images/icons/chat.png";
import ContactUsPopup from "../contact-us-popup";

type AppTemplateProps = {
  pageTitle: String;
  parentTitle?: String;
  navbar?: boolean;
  footer?: boolean;
  children: React.ReactNode;
};

const AppTemplate = ({
  pageTitle,
  parentTitle,
  navbar,
  footer,
  children,
}: AppTemplateProps) => {
  const appName = "Alfahad frontend test";
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Styles>
      {pageTitle && (
        <Helmet>
          <title>
            {parentTitle ? parentTitle + " " : pageTitle + " | " + appName}
          </title>
        </Helmet>
      )}
      {navbar && <SiteNavbar />}
      <div className="main-data">{children}</div>
      {footer && <Footer />}
      <div className="chat">
        {isOpen && (
          <div ref={popupRef}>
            <ContactUsPopup setIsOpen={setIsOpen} />
          </div>
        )}
        <div
          className="chat-icon"
          ref={iconRef}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={ChatIcon} alt="chat" />
        </div>
      </div>
    </Styles>
  );
};

export default AppTemplate;
