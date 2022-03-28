import styles from "./Mailbar.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import { grey } from "@material-ui/core/colors";
import Mailcard from "./Mailcard/Mailcard";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const Mailbar = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <>
      <div className={styles.mailbar__box}>
        <div className={styles.search__box}>
          <form className={styles.search__form}>
            <input type="text" placeholder="Search"></input>
            <SearchIcon style={{ paddingRight: 10, color: grey[500] }} />
          </form>
        </div>
        <div className={styles.mails__box}>

          {mails.map(({id, data: {name, subject, message, label, timestamp}}) => (
            <Mailcard 
            id={id}
            key={id}
            sender={name}
            subject={subject}
            body={message}
            label={label}
            timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          ))}

          <Mailcard
            photoURL="https://bit.ly/3z9NW4j"
            sender="Robyn Fenty"
            subject="This is what we came for."
            timestamp="2:00 PM"
            body="Baby, this is what you came for Lightning strikes every time she
            moves And everybody's watching her But she's looking at you, ooh,
            ooh You, ooh, ooh, you, ooh, ooh You, ooh, ooh, you, ooh, ooh You,
            ooh, ooh Ooh Baby, this is what you came for Lightning strikes
            every time she moves And everybody's watching her But she's
            looking at you, ooh, ooh You, ooh, ooh, you, ooh, ooh You, ooh,
            ooh, you, ooh, ooh You, ooh, ooh Ooh"
            label="orange"
          />
        </div>
      </div>
    </>
  );
};

export default Mailbar;
