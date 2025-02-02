import { Children, useState, useEffect } from "react";
import "./AlertStyle.css";
import Button from "../Button/Button";

function Alert({ children, selfclosing, opensection, autoopen }) {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (autoopen === undefined) setAbierto(false);

    if (autoopen === true) setAbierto(true);
  }, [autoopen]);

  return (
    <>
      <div onClick={() => setAbierto(true)} role="button">
        {opensection}
      </div>

      <div
        className={`container_dialog ${
          abierto ? "container_alert_open" : "container_alert_close"
        }`}
        onClick={() => {
          setAbierto(!abierto);
        }}
        role="button"
      >
        <div
          className="alert"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="alert_content"> {children} </div>

          {!selfclosing && (
            <div className="alert_close">
              <div>
                <Button
                  variant={"btn_small"}
                  handleClick={() => {
                    setAbierto(false);
                  }}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Alert;
