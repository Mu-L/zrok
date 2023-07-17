import React, { useEffect, useState } from "react";
import * as account from "../../../../api/account";
import * as metadata from "../../../../api/metadata";
import { Button, Container, Form, Row } from "react-bootstrap";
import PasswordForm from "../../../../components/password";

const ChangePassword = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState();
    const [complete, setComplete] = useState(false);
    const [passwordLength, setPasswordLength] = useState(10);
    const [passwordRequireCapital, setPasswordRequireCapital] = useState(true);
    const [passwordRequireNumeric, setPasswordRequireNumeric] = useState(true);
    const [passwordRequireSpecial, setPasswordRequireSpecial] = useState(true);
    const [passwordValidSpecialCharacters, setPasswordValidSpecialCharacters] = useState("");

    const errorMessage = <h2 className={"errorMessage"}>Change Password Failed!</h2>;

    useEffect(() => {
        metadata.configuration().then(resp => {
            if (!resp.error) {
                setPasswordLength(resp.data.passwordRequirements.length)
                setPasswordRequireCapital(resp.data.passwordRequirements.requireCapital)
                setPasswordRequireNumeric(resp.data.passwordRequirements.requireNumeric)
                setPasswordRequireSpecial(resp.data.passwordRequirements.requireSpecial)
                setPasswordValidSpecialCharacters(resp.data.passwordRequirements.validSpecialCharacters)
            }
        }).catch(err => {
            console.log("err", err);
        });
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        if (newPassword !== undefined && newPassword !== "" && oldPassword !== undefined && oldPassword !== "") {
            account.changePassword({ body: { "email": props.user.email, "oldPassword": oldPassword, "newPassword": newPassword } })
                .then(resp => {
                    if (!resp.error) {
                        console.log("resp", resp)
                        setMessage(undefined);
                        setComplete(true)
                    } else {
                        setMessage(errorMessage);
                    }
                }).catch(resp => {
                    console.log("resp", resp)
                    setMessage(errorMessage)
                })
        }
    }

    if (!complete) {
        return (
            <Container fluid>
                <Row style={{ marginBottom: "1em" }}>
                    <h1>Change Password</h1>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Form onSubmit={handleSubmit}>
                                <div className="container" style={{ marginBottom: "1em" }}>
                                    <Form.Group controlId={"oldPassword"}>
                                        <Form.Control
                                            type={"password"}
                                            placeholder={"Old Password"}
                                            onChange={t => { setOldPassword(t.target.value); }}
                                            value={oldPassword}
                                        />
                                    </Form.Group>
                                </div>
                                <PasswordForm
                                    setMessage={setMessage}
                                    passwordLength={passwordLength}
                                    passwordRequireCapital={passwordRequireCapital}
                                    passwordRequireNumeric={passwordRequireNumeric}
                                    passwordRequireSpecial={passwordRequireSpecial}
                                    passwordValidSpecialCharacters={passwordValidSpecialCharacters}
                                    setParentPassword={setNewPassword} />
                                <Row style={{ justifyContent: "center", marginTop: "1em" }}>
                                    <Button variant={"light"} type={"submit"}>Reset Password</Button>
                                </Row>
                            </Form>
                        </Row>
                        <Row>
                            {message}
                        </Row>
                    </Container>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <Container fluid>
                <Row>
                    <h1>Change Password</h1>
                </Row>
                <Row>
                    Password reset successful! You can now return to the actions page.
                </Row>
                <Row>
                    <Button variant={"light"} onClick={() => props.returnToActions()}>Back</Button>
                </Row>
            </Container>
        )
    }
}

export default ChangePassword;