"use client";
import * as React from "react";
import { AvailableTiers } from "../../templates/default.template";

export type RGDPBannerProps = { activatedTiers: AvailableTiers[] };

function RGDPBanner({ activatedTiers }: RGDPBannerProps) {
  return (
    <>
      {window &&
        (localStorage.getItem("gdpr-youtube") === undefined ||
          localStorage.getItem("gdpr-soundcloud") === undefined) && (
          <div className="modal d-block" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content d-block text-start">
                <div className="modal-header d-block ">
                  <h5 className="modal-title" id="cookieconsentLabel3">
                    Cookies & Privacy
                  </h5>
                  <p>
                    This website uses cookies to ensure you get the best
                    experience on our website.
                  </p>
                  <p>
                    <a href="#">Read more about cookies</a>
                  </p>
                </div>
                <div className="modal-body">
                  {activatedTiers.map((activatedTier) => {
                    return (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="necessary"
                          checked
                        />
                        <label className="form-check-label" htmlFor="necessary">
                          <p>{activatedTier}</p>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-mdb-dismiss="modal"
                  >
                    Accept necessary
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-mdb-dismiss="modal"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}

export default RGDPBanner;
