import styles from "./Composer.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { grey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeComposer } from "../../features/mailSlice";
import { db } from "../../firebase/firebase";
import firebase from "firebase";

const Composer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
        name: formData.name,
        subject: formData.subject,
        message: formData.message,
        label: formData.Category,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeComposer())
  };
  return (
    <>
      <div className={styles.composer}>
        <div className={styles.compose__header}>
          <h3>Compose new mail</h3>
          <CloseIcon style={{ color: grey[50] }} onClick={()=> dispatch(closeComposer())}/>
        </div>
        <form
          className={styles.compose__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            name="name"
            type="text"
            placeholder="Your name"
            {...register("name", { required: true })}
          ></input>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
          ></input>
          <input
            name="message"
            type="textarea"
            placeholder="Your message"
            {...register("message", { required: true })}
          ></input>
          <div className={styles.radio__box}>
            <p>Category:</p>
            <input
              {...register("Category", { required: true })}
              type="radio"
              value="purple"
            />
            Work
            <input
              {...register("Category", { required: true })}
              type="radio"
              value=" orange"
            />
            Clients
            <input
              {...register("Category", { required: true })}
              type="radio"
              value=" blue"
            />
            Family
            <input
              {...register("Category", { required: true })}
              type="radio"
              value=" pink"
            />
            Friends
          </div>
          <div className={styles.send__box}>
            <Button
              classes={{ label: styles.send__button }}
              variant="contained"
              color="secondary"
              disableElevation
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Composer;
