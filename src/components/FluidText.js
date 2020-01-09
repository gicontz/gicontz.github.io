import React from 'react';
import styled from "styled-components";
import { typography } from "styled-system";
import fluid from "fluid-system";

const FluidText = styled("p")(
  fluid(typography) 
)

export default FluidText;