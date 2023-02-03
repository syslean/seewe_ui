import styled from "styled-components";
import {ReactComponent as AddSvg} from "../../../../../assets/img/add.svg";
import {ReactComponent as CloseSvg} from "../../../../../assets/img/close.svg";
import {ReactComponent as DeleteSvg} from "../../../../../assets/img/delete.svg";

export const ActionWrapper = styled.span`
    margin-left: 0.75rem;
`

export const AddIcon = styled(AddSvg)`
  width: 1.5rem;
  height: 1.5rem;
`

export const CloseIcon = styled(CloseSvg)`
  width: 1.5rem;
  height: 1.5rem;
`

export const DeleteIcon = styled(DeleteSvg)`
  width: 1.5rem;
  height: 1.5rem;
`
