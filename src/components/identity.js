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
import {
    faLinkedin,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Face from "../img/Lin-nb.jpg";

function identity(props) {
    return (
        <div className={"identity"}>
            <div className={"data-contact"}>
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
            <div>
                <img src={Face} className={"profilePic"} />
            </div>
            <div className={"social-media"}>
                <span>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href={props.data.linkedIn}>{"lvannebenne"}</a>
                </span>
                <span>
                    <FontAwesomeIcon icon={faTwitter} />
                    <a href={props.data.twitter}>{"@EmelseaDestiny"}</a>
                </span>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    <a href={props.data.github}>{"LVannebenne"}</a>
                </span>
            </div>
        </div>
    );
}

export default identity;
