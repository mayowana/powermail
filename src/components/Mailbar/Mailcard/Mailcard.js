import styles from './Mailcard.module.scss'
import Clamp from 'react-multiline-clamp'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/mailSlice';

const Mailcard = ({photoURL, sender, subject, timestamp, body, label}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            photoURL, sender, subject, timestamp, body, label
        }))
        history.push("/mail")
    }

    return (
        <>
            <div className={styles.mailcard} onClick={openMail}>
                <div className={styles.first__row}>
                    <div className={styles.mockdiv} style={{borderLeft: `3px solid ${label}`}}></div>
                    <img src={photoURL}></img>
                    <div>
                        <p className={styles.sender}>{sender}</p>
                        <p>{subject}</p>
                    </div>
                    <p className={styles.time}>{timestamp}</p>
                </div>
                <div className={styles.body}>
                    <Clamp lines={2}>
                    <p>{body}</p>
                    </Clamp>
                </div>
            </div>
        </>
    )
};

export default Mailcard;