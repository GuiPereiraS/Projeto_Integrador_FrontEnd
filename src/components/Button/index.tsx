import { type } from "@testing-library/user-event/dist/type";
import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
    type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

    const Button: React.FC<ButtonProps> = () => (
        <Container>
            <Button type="button"/>
        </Container>
    );

    export default Button;