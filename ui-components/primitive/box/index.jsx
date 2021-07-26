import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import styledSystemPropTypes from "@styled-system/prop-types";

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from "styled-system";

const StyledBox = styled("div")`
  box-sizing: border-box;
  min-width: 0;
  ${compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )};
`;

const Box = forwardRef((props, ref) => {
  return <StyledBox ref={ref} {...props} />;
});

Box.propTypes = {
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
};

Box.displayName = "Box";
export default Box;
