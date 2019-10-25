import React from "react";
import Face from "../img/Lin-nb.jpg";
import Navbar from "./navbar";
import {Link} from "react-router-dom";
import {data} from "../data.json";
import dateOfBirth from "../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPhoneSquare,
    faEnvelopeSquare,
    faAt,
    faBirthdayCake,
    faIdCard,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";

export default function header() {
    return (
        <div className={"nav"}>
            <div className={"print-corner"} onClick={() => window.print()}>
                <FontAwesomeIcon icon={faPrint} />
            </div>
            <div className={"flex-row"}>
                <div className={"cont-info"}>
                    <p>
                        <FontAwesomeIcon icon={faIdCard} />
                        <span>
                            {data.contact.firstName} {data.contact.lastName}
                        </span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faBirthdayCake} />
                        <span>
                            {`${data.contact.dateOfBirth} (${dateOfBirth(
                                data.contact.dateOfBirth,
                            )} 
                ans)`}{" "}
                        </span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                        <span>
                            {`${data.contact.adress}, ${data.contact.postCode} ${data.contact.city}`}
                        </span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhoneSquare} />
                        <span>{data.contact.phone}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faAt} />
                        <span>{data.contact.email}</span>
                    </p>
                </div>
                <div>
                    <img
                        className={"profilePic"}
                        src={Face}
                        alt={"Profile portrait"}
                    />
                </div>
                <div className={"title-block"}>
                    <h1 className={"title"}>
                        <Link to={"/"}>{"Junior Web Developper"}</Link>
                    </h1>
                    <h5>
                        {data.sentences.map(sentence => (
                            <span key={sentence}>{sentence}</span>
                        ))}
                    </h5>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
