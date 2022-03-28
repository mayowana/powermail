import styles from "./Sidebar.module.scss";
import { Button, Divider } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import DeleteIcon from "@material-ui/icons/Delete";
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { blue, orange, pink, purple } from "@material-ui/core/colors";
import SidebarList from "./SidebarList/SidebarList";
import { useDispatch } from "react-redux";
import { openComposer } from "../../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.sidebar__box}>
        <div className={styles.button__box}>
          <Button
            classes={{ label: styles.compose__button }}
            variant="contained"
            color="secondary"
            startIcon={<CreateIcon />}
            disableElevation
            onClick={() => dispatch(openComposer())}
          >
            Compose
          </Button>
        </div>
        <div className={styles.drawer}>
          <SidebarList icon={<InboxIcon />} title='Inbox' count={null}  selected/>
          <SidebarList icon={<DraftsIcon />} title='Drafts' count={5} />
          <SidebarList icon={<PresentToAllIcon />} title='Sent' count={null} />
          <SidebarList icon={<DeleteIcon />} title='Trash' count={null} />
        </div>
        <div className={styles.labels}>
          <h4>LABELS</h4>
          <a><FiberManualRecordOutlinedIcon style={{ color: purple[500] }}/><p>Work</p></a>
          <a><FiberManualRecordOutlinedIcon style={{ color: orange[500] }}/><p>Clients</p></a>
          <a><FiberManualRecordOutlinedIcon style={{ color: blue[500] }}/><p>Family</p></a>
          <a><FiberManualRecordOutlinedIcon style={{ color: pink[500] }}/><p>Friends</p></a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
