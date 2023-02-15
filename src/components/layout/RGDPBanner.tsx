"use client";
import * as React from "react";
import { AvailableTiers } from "../../templates/default.template";

export type RGDPBannerProps = { activatedTiers: AvailableTiers[] };

function RGDPBanner({ activatedTiers }: RGDPBannerProps) {
  const [agreement, setAgreement] = React.useState(false);
  const [showModal, setShowModal] = React.useState(true);

  const handleChange = (event: any) => {
    setAgreement(event.target.checked);
    localStorage.setItem(`gdpr-${event.target.id}`, JSON.stringify(!agreement));
    console.log(localStorage.getItem("gdpr-youtube"));
    console.log(localStorage);
  };

  const clear = () => {
    localStorage.clear();
    console.log("clear");
    setShowModal(true);
    console.log(localStorage);
  };

  return (
    <>
      <button onClick={clear}>PUSH HERE</button>
      {window && showModal
        ? (localStorage.getItem("gdpr-youtube") === null ||
            localStorage.getItem("gdpr-soundcloud") === null) && (
            <div
              className="modal d-block"
              id="cookieconsent3"
              tabIndex={-1}
              aria-labelledby="cookieconsentLabel3"
              aria-hidden="true"
              data-mdb-backdrop="static"
              data-mdb-keyboard="false"
            >
              <div className="modal-dialog">
                <div className="modal-content d-block text-start">
                  <div className="modal-header d-block ">
                    <h5 className="modal-title" id="cookieconsentLabel3">
                      Cookies et confidentialité
                    </h5>
                    <p>
                      Ce site utilise des cookies pour vous garantir la
                      meilleure expérience sur notre site.
                    </p>
                  </div>
                  <div className="modal-body">
                    {activatedTiers.map((activatedTier, key) => {
                      return (
                        <div className="form-check" key={key}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={activatedTier}
                            defaultChecked={agreement}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={activatedTier}
                          >
                            <p>{activatedTier}</p>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => setShowModal(false)}
                    >
                      Accepter la sélection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        : ""}
    </>
  );
}

export default RGDPBanner;
