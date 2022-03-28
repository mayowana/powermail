import styles from "./Mailbody.module.scss";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import ReplyAllOutlinedIcon from "@material-ui/icons/ReplyAllOutlined";
import ForwardOutlinedIcon from "@material-ui/icons/ForwardOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  DeleteOutlined,
  GetApp,
} from "@material-ui/icons";
import { grey, white } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../features/mailSlice";

const Mailbody = () => {
  const selectedMail = useSelector(selectOpenMail);
  return (
    <>
    { selectedMail ?
      <div className={styles.mailbody}>
        <div className={styles.mail__head}>
          <div className={styles.left__icons}>
            <FavoriteBorderOutlinedIcon
              style={{ marginRight: 15, color: grey[500] }}
            />
            <ReplyOutlinedIcon style={{ marginRight: 15, color: grey[500] }} />
            <ReplyAllOutlinedIcon
              style={{ marginRight: 15, color: grey[500] }}
            />
            <ForwardOutlinedIcon
              style={{ marginRight: 15, color: grey[500] }}
            />
            <FolderOutlinedIcon style={{ marginRight: 15, color: grey[500] }} />
            <DeleteOutlined style={{ marginRight: 15, color: grey[500] }} />
          </div>
          <div className={styles.right__icons}>
            <ChevronLeftOutlined style={{ color: grey[500] }} />
            <ChevronRightOutlined style={{ color: grey[500] }} />
          </div>
        </div>
        <div className={styles.mail__main}>
          <div className={styles.mail__one}>
            <p>
              <span>{selectedMail?.sender}</span> to <span>Wana Gee</span>
            </p>
            <p className={styles.time}>{selectedMail?.timestamp}</p>
          </div>
          <div className={styles.sender}>
            <img src="https://bit.ly/3z9NW4j"></img>
            <p>{selectedMail?.subject}</p>
          </div>
          <div className={styles.mail__two}>
            <p>
              {selectedMail?.body}
            </p>
            <div className={styles.img__box}>
            <img className={styles.img1} src={null}></img>
            <img className={styles.img2} src={null}></img>
            </div>
            <div className={styles.download}><Button
              startIcon={<GetApp />}
              variant="contained"
              disableElevation
              style={{
                backgroundColor: grey[50],
                border: `1px solid ${grey[500]}`,
              }}
            >
              Download All
            </Button>
            </div>
          </div>
        </div>
      </div> : null
}
    </>
  );
};

export default Mailbody;
