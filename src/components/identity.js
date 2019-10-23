import React from "react";
import dateOfBirth from "../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPhoneSquare,
    faEnvelopeSquare,
    faAt,
    faBirthdayCake,
    faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import Face from "../img/Lin-nb.jpg";

function identity(props) {
    return (
        <div className={"identity"}>
            <img src={Face} />
            <p>
                <FontAwesomeIcon icon={faIdCard} />
                <span>
                    {props.data.firstName} {props.data.lastName}
                </span>
            </p>
            <p>
                <FontAwesomeIcon icon={faBirthdayCake} />
                <span>
                    {`${props.data.dateOfBirth} (${dateOfBirth(
                        props.data.dateOfBirth,
                    )} 
                ans)`}{" "}
                </span>
            </p>
            <p>
                <FontAwesomeIcon icon={faEnvelopeSquare} />
                <span>{props.data.adress}</span>
                <br />
                <span>{`${props.data.postCode} ${props.data.city}`}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faPhoneSquare} />
                <span>{props.data.phone}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faAt} />
                <span>{props.data.email}</span>
            </p>
        </div>
    );
}

export default identity;
