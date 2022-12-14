import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.meetingId}
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          trailer={meetup.trailer}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
