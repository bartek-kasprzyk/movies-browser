import { PersonDetailsTile } from "./Content/PersonDetailsTile";
import { PartOfCast } from "./Content/PartOfCast";
import { PartOfCrew } from "./Content/PartOfCrew";
import { Container } from "../../common/Container";
import { usePersonDetails } from "./usePersonDetails";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

export const PersonPage = () => {
    const { personDetails } = usePersonDetails();
    const { loading } = usePersonDetails();

    return (
        <>
            {loading === true ? (
                <Loading />
            )
                : personDetails.status === "error" ? (
                    <Error />
                )
                    : (
                        <main>
                            <Container>
                                <PersonDetailsTile />
                                <PartOfCast />
                                <PartOfCrew />
                            </Container>
                        </main>
                    )
            }
        </>
    )
};