import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import Text from "@bitcody/ui-components.primitive.text";
import Box from "@bitcody/ui-components.primitive.box";
import { ThemeContext } from "styled-components";
import { ifProp, theme } from "styled-tools";
import PropTypes from "prop-types";
import styledSystemPropTypes from "@styled-system/prop-types";

const StyledButton = styled(Box)`
  /* */
  font-family: ${theme("fonts.default")};
  font-size: ${theme("fontSizes.lg")};
  font-weight: 500;
  background-color: ${theme("colors.Button")};
  color: ${theme("colors.ButtonText")};
  width: 351px;
  max-height: 48px;
  border: none;
  cursor: pointer;
  padding: ${ifProp("iconName", "12px 16px", "14px 16px")};
  text-align: center;
  border-radius: ${theme("radii.lg")};
  &:hover {
    background-color: ${ifProp(
      "disabled",
      theme("colors.Button"),
      theme("colors.ButtonHover")
    )};
  }
  &:active {
    background-color: ${theme("colors.Button")};
    box-shadow: ${theme("shadows.lg")};
    outline: none;
    border: none;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.3;
  }
`;

const Button = forwardRef((props, ref) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledButton
      as="button"
      ref={ref}
      aria-label={typeof props.children === "string" ? props.children : ""}
      {...props} // has to come last
    >
      <Text
        as="div"
        fontSize="inherit"
        lineHeight="20px"
        limitLinesOfTextTo={1}
      >
        {props.children}
      </Text>
    </StyledButton>
  );
});

Button.displayName = "Button";

Button.propTypes = {
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
  disabled: PropTypes.bool,
};

export default Button;
