import React, { useState, useContext } from "react";
import { DataContext } from "../components/Context";
import { useTranslation } from "react-i18next"; // Translation module

const Footer = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <small>
        &copy;2020 {i18n.t("firstName")} {i18n.t("lastName")}
      </small>
    </footer>
  );
};

export default Footer;
