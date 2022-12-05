import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const meetupData = {
      meetingId: enteredTitle,
      title: enteredTitle,
      image: enteredImage,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Movie Title (must be unique: it's the meeting ID)</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Movie Poster Image (URL)</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div> */}
        {/* <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div> */}
        <div className={classes.actions}>
          <button>Add to WatchList</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
