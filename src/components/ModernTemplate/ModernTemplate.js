import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLayerGroup, faBarsProgress, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ModernTemplate.scss";

export const ModernTemplate = () => {
  return (
    <div className="main container-fluid mx-auto">
      <div className="navbar justify-content-center">
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
        <div>
          <FontAwesomeIcon icon={faBarsProgress} />
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
};
