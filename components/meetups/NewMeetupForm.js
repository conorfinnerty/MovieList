import { useRef } from 'react';

import Card from '../ui/addCards';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const trailerInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredTrailer = trailerInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      meetingId: enteredTitle,
      title: enteredTitle,
      trailer: enteredTrailer,
      image: enteredImage,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <addCard>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Movie Title (must be unique: it's the meeting ID)</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Movie Poster Image (URL)</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Trailer'>Movie Trailer (URL)</label>
          <input type='url' required id='trailer' ref={trailerInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Description'>Movie Description</label>
          {/* <input type='url' required id='description' rows = '5' ref={descriptionInputRef} /> */}
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
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
    </addCard>
  );
}

export default NewMeetupForm;
