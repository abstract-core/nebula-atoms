"use client";

import React from "react";
import { ResizedImageBlockObject } from "../../types/ExtendedBlockObjectResponse";

export default function ResizedImage({
  block,
}: {
  block: ResizedImageBlockObject;
}) {
  const [modal, setModal] = React.useState(false);
  const className = "figure-img mt-5 mb-4";
  return (
    <figure className="figure">
      <img
        src={block.standardUrl}
        srcSet={`${block.minUrl} 360w, ${block.medUrl} 800w`}
        sizes="(max-width: 360px), (max-width: 800px) 360px, 800px"
        className={className}
        onClick={() => setModal(true)}
      />
      {modal ? (
        <div className="modal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </figure>
  );
}
