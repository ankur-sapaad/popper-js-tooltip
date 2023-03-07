import { usePopper } from "react-popper";
import React, { useState } from "react";
import { TooltipStyled, ButtonStyled } from "./Tooltip.styles";

//---------------------------------------
const Tooltip = () => {
  const [referenceEl, setReferenceEl] = useState(null);
  const [popperEl, setPopperEl] = useState(null);

  const { styles, attributes } = usePopper(referenceEl, popperEl, {
    placement: "right",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const showTooltip = () => {
    popperEl.setAttribute("data-show", true);
  };

  const hideTooltip = () => {
    popperEl.removeAttribute("data-show");
  };

  return (
    <React.Fragment>
      <ButtonStyled
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        ref={setReferenceEl}
      >
        Hover Over Me!
      </ButtonStyled>

      <TooltipStyled
        ref={setPopperEl}
        style={styles.popper}
        {...attributes.popper}
      >
        <p>Hello from the tooltip 👋</p>
      </TooltipStyled>
    </React.Fragment>
  );
};

export default Tooltip;
