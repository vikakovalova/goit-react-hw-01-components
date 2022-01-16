import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline && <span className={s.status + ' ' + s.statusOnline}></span>}
      {!isOnline && <span className={s.status + ' ' + s.statusOffline}></span>}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

export default FriendListItem;
