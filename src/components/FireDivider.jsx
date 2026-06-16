import React from "react";
function FireDivider() {
  return (
    <div className="fire-divider" aria-hidden="true">
      <span className="fd-line" />
      <span className="fd-flames">
        {[0, 1, 2, 3, 4].map((i) => (
          <span className="fd-flame" key={i}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 7 7 11 9 14a3 3 0 0 0 6 0c2-3 1-7-3-12z" />
            </svg>
          </span>
        ))}
      </span>
      <span className="fd-line" />
    </div>
  );
}

/* ============================================================
   Ambient ember particle field — same physics as the original
   canvas script, adapted to a React lifecycle.
   ============================================================ */

export default FireDivider;
