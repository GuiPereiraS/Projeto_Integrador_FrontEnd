import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

import { IconBase, IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
    return (
        <Container>
            <input type="input"/>
        </Container>
    )
};

export default Input;