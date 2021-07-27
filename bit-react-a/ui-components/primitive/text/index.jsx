import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import Box from "@bitcody/bit-react-a.ui-components.primitive.box";
import { ifProp, prop } from "styled-tools";
import PropTypes from "prop-types";
import styledSystemPropTypes from "@styled-system/prop-types";
console.log(styledSystemPropTypes.space);
const StyledText = styled(Box)`
  ${ifProp(
    "limitLinesOfTextTo",
    css`
      overflow: hidden;
      -webkit-box-orient: vertical;
      /* Limit the text block to x lines */
      -webkit-line-clamp: ${prop("limitLinesOfTextTo")};
    `,
    ``
  )}
  display: -webkit-box;
  line-height: 1.5;
`;

const Text = forwardRef((props, ref) => {
  return (
    <StyledText
      as="span"
      ref={ref}
      fontSize="sm"
      fontFamily="default"
      {...props}
    />
  );
});

Text.displayName = "Text";

Text.propTypes = {
  ...styledSystemPropTypes.space,
  ...styledSystemPropTypes.color,
  ...styledSystemPropTypes.background,
  ...styledSystemPropTypes.border,
  ...styledSystemPropTypes.flexbox,
  ...styledSystemPropTypes.grid,
  ...styledSystemPropTypes.layout,
  ...styledSystemPropTypes.position,
  ...styledSystemPropTypes.shadow,
  ...styledSystemPropTypes.typography,
  as: PropTypes.string,
  forwardAs: PropTypes.string,
  children: PropTypes.node.isRequired,
  limitLinesOfTextTo: PropTypes.number,
};

export default Text;
