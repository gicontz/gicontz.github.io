import styled from "styled-components";
import { layout , color } from "styled-system";
import { typography } from "styled-system";
import fluid from "fluid-system";

const Text = styled("p")(
  fluid(typography) 
)
export default Text;