import { Container } from "react-bootstrap";
import NotesPageLoggedInView from "../components/NotesPageLoggedInView";
import NotesPageLoggedOutView from "../components/NotesPageLoggedOutView";
import styles from "../styles/NotePage.module.css";
import { user } from "../models/user";

interface NotesPageProps {
    loggedInUser: user | null,
}

const NotesPage = ({loggedInUser}: NotesPageProps) => {
    return (
        <Container className={styles.notesPage}>
        <>
          {loggedInUser
            ? <NotesPageLoggedInView />
            : <NotesPageLoggedOutView />
          }
        </>
      </Container>
    );
};

export default NotesPage;