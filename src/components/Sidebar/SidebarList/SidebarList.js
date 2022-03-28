import styles from './SidebarList.module.scss'

const SidebarList = ({icon, title, count, selected}) => {

    return (
        <>
        <div className={selected ? styles.sidebar__list__active : styles.sidebar__list}>
            <a href="/">
            {icon}
            <p>{title}</p>
            <p>{count}</p>
          </a>
          </div>
        </>
    )
};

export default SidebarList;