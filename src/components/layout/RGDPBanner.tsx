"use client";
import * as React from "react";
import { AvailableTiers } from "../../templates/default.template";

export type RGDPBannerProps = { activatedTiers: AvailableTiers[] };

function RGDPBanner({ activatedTiers }: RGDPBannerProps) {
  const [isChecked, setIsChecked] = React.useState(Boolean);
  const [tier, setTier] = React.useState(activatedTiers);
  const [showModal, setShowModal] = React.useState(true);

  const handleChange = (event: any) => {
    setIsChecked(event.target.checked);
    setTier(event.target.id);
  };

  const handleSubmit = () => {
    localStorage.setItem(`gdpr-${tier}`, JSON.stringify(isChecked));
    console.log(localStorage);
    setShowModal(false);
    location.reload();
  };

  const clear = () => {
    localStorage.clear();
    console.log("clear");
    setShowModal(true);
    console.log(localStorage);
  };

  return (
    <>
      <button onClick={clear}>RESET LOCAL STORAGE</button>
      {showModal && localStorage.getItem(`gdpr-${tier}`) === null ? (
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
                  Ce site utilise des cookies pour vous garantir la meilleure
                  expérience sur notre site.
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
                        defaultChecked={isChecked}
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
                  onClick={handleSubmit}
                >
                  Accepter la sélection
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RGDPBanner;
